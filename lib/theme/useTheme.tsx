'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { THEME_STORAGE_KEY } from './ThemeScript'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  /** False until the client has read the DOM, so nothing renders the wrong icon. */
  ready: boolean
  setTheme(theme: Theme): void
  toggle(): void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  ready: false,
  setTheme: () => {},
  toggle: () => {},
})

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}

function currentDomTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark'
}

/**
 * The theme, from its source of truth rather than from the DOM.
 *
 * MUST STAY IN STEP WITH THE INLINE SCRIPT in ThemeScript.tsx. The two cannot
 * share code — one is a string that runs before any module loads — so they
 * are duplicated deliberately and must be changed together.
 */
function resolveTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* storage unavailable — fall through to the system preference */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [ready, setReady] = useState(false)

  /* RE-APPLY, don't merely read.
     The pre-hydration script sets the attribute during parsing, which is all
     production needs. In development, Strict Mode remounts once and resets
     <html> to only the attributes React manages from JSX — clearing the one
     the script set. Reading the DOM at that point returns the default and the
     page silently drops to dark regardless of the stored preference.

     Resolving from storage and writing the attribute back is correct in both
     environments: in production it writes the same value the script already
     set, so it is a no-op. */
  useEffect(() => {
    const resolved = resolveTheme()
    document.documentElement.setAttribute('data-theme', resolved)
    setThemeState(resolved)
    setReady(true)
  }, [])

  /* Follow the system only while the user has made no explicit choice. */
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      } catch {
        /* storage unavailable — treat as no explicit choice */
      }
      if (stored === 'light' || stored === 'dark') return
      const next: Theme = event.matches ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      setThemeState(next)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    const root = document.documentElement

    /* Colours ease for one switch only. A permanent transition on every
       element would make ordinary hovers feel sluggish. */
    root.classList.add('gr-theming')
    root.setAttribute('data-theme', next)
    setThemeState(next)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* no-op — the switch still applies for this session */
    }

    window.setTimeout(() => root.classList.remove('gr-theming'), 320)
  }, [])

  const toggle = useCallback(() => {
    setTheme(currentDomTheme() === 'dark' ? 'light' : 'dark')
  }, [setTheme])

  return (
    <ThemeContext.Provider value={{ theme, ready, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
