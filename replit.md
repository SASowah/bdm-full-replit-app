# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### BDM Website (`artifacts/bdm-website`)
- **Type**: React + Vite static site (presentation-first, no backend)
- **Preview path**: `/` (root)
- **Purpose**: Professional marketing website for Buabeng Degeneral Merchant (BDM)
- **Sections**: Hero, Company Overview, Core Services, Global Reach, Partners & Clients, Mission/CTA, Footer
- **Features**: Sticky navigation, scroll-reveal animations, AI-generated imagery, responsive design

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/bdm-website run dev` — run BDM website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
