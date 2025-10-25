# 🫥 Nothing boilerplate

Just another Next.js boilerplate.

✨ Demo: [https://nothing.jaouan.dev](https://nothing.jaouan.dev)

## Features

- **Framework** : Next.js (file-based routing, RSC, server actions)
- **Auth** : Supabase (SSR+CSR) / Better-Auth (SSR+CSR) / Firebase (CSR only)
- **Backend** : Supabase (client-side + server-side) / Firebase (client-side only)
- **State Management** : Zustand
- **UI / Styling** : TailwindCSS + Shadcn
- **Code Quality & Formatting** : Biome
- **Git Hooks** : Husky

## Getting Started

1. **Install dependencies**
   ```sh
   pnpm install
   # or npm install / yarn install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env.local` and fill in your keys.

3. **Choose Better-Auth, Firebase or Supabase for authentication**
   - Toggle the exports in `lib/auth/browser.ts` and `lib/auth/server.ts`.
   - If switching to Supabase, delete `<AuthenticatedOnly>` HOC.
   - Delete any unused auth folders.
   - Ensure to remove any unused dependencies after switching.

4. **Run the development server**
   ```sh
   pnpm dev
   ```

5. **Google OAuth setup** :
   - [better-auth guide](https://www.better-auth.com/docs/authentication/google)
   - [firebase guide](https://firebase.google.com/docs/auth/web/google-signin)
   - [supabase guide](https://supabase.com/docs/guides/auth/social-login/auth-google)

6. _(Supabase only)_ **Backend setup**
   - Initialize: `supabase init`
   - Create migrations/seeds in `supabase/migrations/` and `supabase/seed.sql`
   - Push schema: `supabase db push`

7. _(better-auth only)_ **Database setup**
   - Generate schema: `npx @better-auth/cli@latest generate --config ./lib/auth/better-auth/auth.ts`

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

- Google OAuth via Better-Auth, Firebase or Supabase
- Session state managed with Zustand
- Next.js proxy for protected routes

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
