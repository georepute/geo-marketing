import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', '*.config.*'],
  },

  ...tseslint.configs.recommended,

  /* ==========================================================================
     THE SEAM RULE.

     Plan §8 risk: "mock seams rotting into real coupling". Screens reach data
     only through lib/api/client — never lib/seed, never an adapter. Enforced
     here rather than left to discipline: the moment a page imports a seed
     module for its VALUES, lint fails.

     `allowTypeImports` is deliberate. Types are contracts, not data; crossing
     the seam for a type costs nothing and changes nothing when a real backend
     arrives.
     ======================================================================= */
  {
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/lib/seed/*', '**/lib/seed/*'],
              allowTypeImports: true,
              message:
                'Screens must not read the seed directly. Import from @/lib/api/client — that is the seam a real backend drops into. Type-only imports are allowed.',
            },
            {
              group: ['@/lib/api/adapters/*', '**/lib/api/adapters/*'],
              allowTypeImports: true,
              message:
                'Do not import an adapter directly. Use @/lib/api/client, which selects the adapter.',
            },
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
    },
  },

  /* The seed and API layers are allowed to know about themselves. */
  {
    files: ['lib/**/*.ts', 'tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-restricted-imports': 'off',
    },
  },
)
