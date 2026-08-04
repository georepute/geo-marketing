/* ============================================================================
   Flash-of-wrong-theme prevention.

   This runs BEFORE React hydrates and before first paint, stamping
   `data-theme` on <html>. Without it the page paints in the default theme and
   then snaps — the single most visible flaw a theme toggle can have.

   Deliberately dependency-free and inlined: any import would defer it past
   first paint and defeat the purpose.
   ========================================================================= */

export const THEME_STORAGE_KEY = 'gr.theme.v1'

const script = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`

export function ThemeScript() {
  return (
    <script
      // The content is a build-time constant with no interpolation of
      // user input — the only safe use of this API.
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  )
}
