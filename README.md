# Yasen's Portfolio

My personal portfolio, written in TypeScript and using Next.js 16 with the App Router.

[**VIEW HERE**](https://portfolio-dusky-xi-94.vercel.app/)

## Development

This project uses [pnpm](https://pnpm.io/) (see `packageManager` in `package.json`).

```sh
pnpm install
pnpm dev        # start the dev server
pnpm build      # production build
pnpm lint       # biome lint
pnpm format     # biome format --write
pnpm check      # biome lint + format + import sorting, applies safe fixes
pnpm typecheck  # tsc --noEmit
```

## Deployment

Deployed on Vercel. Vercel picks pnpm 9 for this project by default and ignores
the `packageManager` field unless corepack is enabled, which breaks the install
because `engines.pnpm` requires pnpm 10+. The project has
`ENABLE_EXPERIMENTAL_COREPACK=1` set in its Vercel environment variables
(production, preview and development) so the build uses the pnpm version from
`packageManager`. Don't remove it.
