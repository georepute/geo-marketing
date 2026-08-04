'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Constellation field — drifting nodes joined by proximity lines, reacting
   gently to the pointer. It reinforces the product's central idea: isolated
   signals that become meaningful when connected.

   BUDGETED, because a particle canvas is the easiest way to ruin a page:

     · Node count scales with viewport area and hard-caps at 68.
     · Neighbour search is O(n²) but n is small; at 68 nodes that is ~2.3k
       distance checks per frame, which is nothing.
     · Frames are throttled to ~30fps. The motion is a slow drift; 60fps buys
       no perceptible smoothness and doubles the cost.
     · An IntersectionObserver pauses the loop entirely when scrolled past,
       and `visibilitychange` pauses it when the tab is hidden.
     · Device pixel ratio is capped at 2 — beyond that it is invisible work.
     · Under `prefers-reduced-motion` the canvas is never created at all: the
       component renders a single static frame and stops.
   ========================================================================= */

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const MAX_NODES = 68
const LINK_DISTANCE = 132
const POINTER_RADIUS = 168
const FRAME_MS = 1000 / 30

export function ParticleField({
  className,
  density = 1,
}: {
  className?: string
  /** Scales node count. Below 1 for surfaces that sit behind dense data. */
  density?: number
}) {
  const reduced = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let nodes: Node[] = []
    let raf = 0
    let last = 0
    let visible = true
    let hidden = document.hidden
    const pointer = { x: -9999, y: -9999, active: false }

    /* Colour is read from the theme token, so the field recolours on a theme
       switch without this component knowing themes exist. No literal fallback:
       the canvas only draws inside an effect, by which point stylesheets have
       applied — an unresolved token means something else is wrong, and drawing
       a guessed violet would hide it. */
    let strokeColor = ''

    function readTheme() {
      strokeColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--gr-brand-400')
        .trim()
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas!.width = Math.floor(width * dpr)
      canvas!.height = Math.floor(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.min(
        MAX_NODES,
        Math.round(((width * height) / 21000) * density),
      )

      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 0.9 + Math.random() * 1.5,
      }))

      readTheme()
    }

    function draw(time: number) {
      raf = requestAnimationFrame(draw)
      if (!visible || hidden || !strokeColor) return
      if (time - last < FRAME_MS) return
      last = time

      ctx!.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      // Proximity links.
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]!
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]!
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > LINK_DISTANCE) continue
          ctx!.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.22
          ctx!.strokeStyle = strokeColor
          ctx!.lineWidth = 0.6
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.stroke()
        }
      }

      // Pointer links — the field acknowledges the cursor without chasing it.
      if (pointer.active) {
        for (const node of nodes) {
          const dist = Math.hypot(node.x - pointer.x, node.y - pointer.y)
          if (dist > POINTER_RADIUS) continue
          ctx!.globalAlpha = (1 - dist / POINTER_RADIUS) * 0.4
          ctx!.strokeStyle = strokeColor
          ctx!.lineWidth = 0.7
          ctx!.beginPath()
          ctx!.moveTo(node.x, node.y)
          ctx!.lineTo(pointer.x, pointer.y)
          ctx!.stroke()
        }
      }

      // Nodes last, so they sit above their own links.
      ctx!.globalAlpha = 0.7
      ctx!.fillStyle = strokeColor
      for (const node of nodes) {
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return
      const rect = canvas!.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    function onPointerLeave() {
      pointer.active = false
    }

    function onVisibility() {
      hidden = document.hidden
    }

    resize()

    if (reduced) {
      // One static frame: the relationships are visible, nothing moves.
      draw(performance.now())
      cancelAnimationFrame(raf)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting)
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const themeObserver = new MutationObserver(readTheme)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    document.addEventListener('visibilitychange', onVisibility)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [reduced, density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        'pointer-events-auto absolute inset-0 size-full',
        // The field is atmosphere. It must never compete with the headline.
        'opacity-[0.55]',
        className,
      )}
    />
  )
}
