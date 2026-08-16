<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Start here

Read **`docs/HANDOFF.md`** before doing anything else. It records what has been
built against the launch requirements, which of the three translation layers a
string belongs to, and the several ways verification silently lies in this
environment — a stale dev server and a 500 both read as "no English left".

Two rules worth carrying before you open it:

- **Verify against a server you just started, on a port you just freed.**
  `pkill` does not exist here and Next 16 will not start a second dev server.
- **`next/root-params` cannot enter a Client Component, even transitively.**
  Use `useT()` there, `getT()` on the server.
