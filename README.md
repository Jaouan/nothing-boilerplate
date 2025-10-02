# 🫥 Nothing boilerplate

Just another Next.js boilerplate.

## Features

- **Next.js**: File-based routing, server/client components, server actions
- **Supabase**: Auth, Postgres, SSR/CSR integration
- **Zustand**: Global state management for user/session/data
- **TailwindCSS + Shadcn**: Beautiful, customizable UI components
- **Authentication**: Google OAuth, session management, protected routes
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
   - Copy `.env.example` to `.env.local` and fill in your Supabase keys:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY` (for seeding/migrations)

3. **Run the development server**
   ```sh
   pnpm dev
   ```

4. **Google OAuth setup** :
   [supabase guide](https://supabase.com/docs/guides/auth/social-login/auth-google)

5. **Supabase setup**
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
lib/                # Utilities, Supabase client/server helpers
stores/             # Zustand stores (user, data)
supabase/           # Supabase migrations, seeds, config
```

## Authentication

- Google OAuth via Supabase
- Session state managed with Zustand
- Middleware for protected routes

## Data Fetching

- Use server actions for secure SSR/CSR data access
- Zustand stores for client state, calling server actions via API

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
