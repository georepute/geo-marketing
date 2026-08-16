/* ============================================================================
   Prints the product-screenshot slots still waiting on a real export.

   Run with:  npm run screens

   Plain .mjs rather than .ts so `tsc --noEmit`, which typechecks every .ts
   file in the repo, never has to reason about a build script. Node strips the
   types out of the imported registry itself.
   ========================================================================= */

import { SCREEN_SLOTS, pendingSlots } from '../lib/visual/screens.ts'

const pending = pendingSlots()
const total = Object.keys(SCREEN_SLOTS).length
const ready = total - pending.length

console.log('')
console.log(`  Product screens: ${ready} of ${total} filled.`)
console.log('')

if (pending.length === 0) {
  console.log('  Every slot has a real export. Nothing outstanding.')
  console.log('')
  process.exit(0)
}

for (const slot of pending) {
  console.log(`  [ ] ${slot.id}`)
  console.log(`      capture : ${slot.surface}`)
  console.log(`      save to : public${slot.file}`)
  console.log(`      then    : set ready: true in lib/visual/screens.ts`)
  console.log('')
}

console.log(
  '  Anonymise every export first — no customer names, domains, personal',
)
console.log('  data, confidential figures, or real candidates and campaigns.')
console.log('')
