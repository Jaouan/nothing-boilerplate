# 🫥 Nothing boilerplate

Just another Next.js boilerplate.

## Features

- **Next.js**: File-based routing, server/client components, server actions
- **Supabase**: Auth, Postgres (SSR/CSR)
- **Firebase**: Auth (CSR)
- **Zustand**: Global state management
- **TailwindCSS + Shadcn**: Beautiful, customizable UI components
- **Server Actions**: Secure data fetching and mutations
- **Biome**: Code quality and formatting
- **TypeScript**: Type safety throughout
- **Husky**: Git hooks for linting and testing

## Getting Started

1. **Install dependencies**
   ```sh
   pnpm install
   # or npm install / yarn install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env.local` and fill in your keys.

3. **Choose Supabase or Firebase for authentication**
   - By default, Firebase is enabled. To switch to Supabase, toggle the exports in `lib/auth/browser.ts` and `lib/auth/server.ts`.
   - If switching to Supabase, delete `<AuthenticatedOnly>` HOC.
   - Ensure to remove any unused dependencies after switching.

4. **Run the development server**
   ```sh
   pnpm dev
   ```

5. **Google OAuth setup** :
   - [supabase guide](https://supabase.com/docs/guides/auth/social-login/auth-google)
   - [firebase guide](https://firebase.google.com/docs/auth/web/google-signin)

6. _(Supabase only)_ **Backend setup**
   - Initialize: `supabase init`
   - Create migrations/seeds in `supabase/migrations/` and `supabase/seed.sql`
   - Push schema: `supabase db push`

## Project Structure

```
app/                # Next.js app router
  actions/          # Server actions (e.g. fetchDataAction)
  private/          # Private example page
components/         # UI components (atoms, navbar, theme, ...)
hooks/              # Custom React hooks
lib/                # Utilities, backend client/server helpers
stores/             # Zustand stores (user, data)
supabase/           # Supabase migrations, seeds, config
```

## Authentication

- Google OAuth via Supabase or Firebase
- Session state managed with Zustand
- Middleware for protected routes

## Data Fetching

- Use server actions for secure SSR/CSR data access
- Zustand stores for client state, calling server actions via API

Example:
- `useDataStore.actions.ts`: use server actions.
- `useDataStore.firebase.ts`: use Firebase client SDK (fetching and subscribing to data).

## UI & Theming

- TailwindCSS + Shadcn for rapid UI development
- ThemeSwitcher for dark/light mode

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `supabase db push` — Apply migrations
- `supabase db seed` — Seed database

## Contributing

PRs and issues welcome! Please follow code style and best practices.

## License

MIT
