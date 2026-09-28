# Valeriya Nikiforova — Portfolio

A responsive personal portfolio presenting my frontend, full-stack, and mobile engineering experience through visual project chapters rather than a traditional résumé layout.

## Highlights

- About, education, contact, and downloadable CV
- Visual professional-experience stories with project screenshots
- Automatic day/night theme with manual controls
- Accessible, responsive navigation and reduced-motion support
- Reusable UI and motion foundations in an Nx monorepo

## Stack

React 19, TypeScript, TanStack Router, Tailwind CSS, Motion, Vite, Vitest, and Nx.

## Run locally

```bash
npm install
npm run start:portfolio
```

Open [http://localhost:4200](http://localhost:4200).

## Validate

```bash
npx nx run-many -t lint,typecheck,test,build --projects=portfolio,@learning-app/motion
```
