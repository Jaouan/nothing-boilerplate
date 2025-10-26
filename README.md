# 🫥 Nothing boilerplate

Just another Next.js boilerplate.

✨ Demo: [https://nothing.jaouan.dev](https://nothing.jaouan.dev)

## Features

- **Framework** : Next.js (file-based routing, RSC, server actions)
- **Auth** : Supabase (SSR+CSR) / Better-Auth (SSR+CSR) / Firebase (CSR only)
- **Backend** : Supabase (client-side + server-side) / Firebase (client-side only)
- **Payments** : Stripe (checkout sessions, webhooks)
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

8. _(Optional)_ **Stripe Payment Demo setup**
   - Get your API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
   - Add them to `.env.local`:
     ```env
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
     STRIPE_SECRET_KEY=sk_test_...
     STRIPE_WEBHOOK_SECRET=whsec_...
     ```
   - Visit `/stripe-demo` to see the payment integration demo

## Stripe Payment Demo

This boilerplate includes a complete Stripe payment integration demonstration.

### Features

- **Product Selection**: Browse and select from predefined products
- **Secure Checkout**: Integration with Stripe Checkout for secure payment processing
- **Webhook Handling**: Server-side webhook endpoint to handle payment events
- **Success/Cancel Pages**: User-friendly feedback for payment outcomes
- **Type Safety**: Full TypeScript support for Stripe integration

### Setup Instructions

1. **Create a Stripe Account**
   - Sign up at [stripe.com](https://stripe.com)
   - Navigate to the [Stripe Dashboard](https://dashboard.stripe.com)

2. **Get API Keys**
   - Go to Developers → API keys
   - Copy your **Publishable key** (starts with `pk_test_`)
   - Copy your **Secret key** (starts with `sk_test_`)

3. **Configure Environment Variables**
   Add to your `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

4. **Set Up Webhooks (for production)**
   - Install Stripe CLI: `brew install stripe/stripe-cli/stripe` (macOS) or [download here](https://stripe.com/docs/stripe-cli)
   - Login: `stripe login`
   - Forward webhooks to local: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
   - Copy the webhook signing secret (starts with `whsec_`)
   - Add it to `.env.local` as `STRIPE_WEBHOOK_SECRET`

5. **Test the Integration**
   - Start the dev server: `npm run dev`
   - Visit `http://localhost:3000/stripe-demo`
   - Use Stripe test card: `4242 4242 4242 4242` with any future expiry and CVC

### File Structure

```
app/
  api/stripe/
    checkout/           # Create checkout sessions
    webhook/            # Handle payment webhooks
  stripe-demo/          # Demo pages
    page.tsx            # Product selection page
    success/page.tsx    # Payment success page
    cancel/page.tsx     # Payment cancelled page
components/stripe/
  Products.tsx          # Product listing component
  ProductCard.tsx       # Individual product card
lib/stripe/
  config.ts             # Stripe configuration
  products.ts           # Product data and utilities
  products.test.ts      # Product tests
```

### Security Best Practices

✅ **Implemented Security Measures:**

- API keys stored in environment variables (never committed to code)
- Webhook signature verification to prevent tampering
- Server-side validation of all payment requests
- HTTPS required for production webhooks
- Sensitive operations handled server-side only

⚠️ **Production Checklist:**

- [ ] Switch from test to live API keys
- [ ] Configure webhook endpoint in Stripe Dashboard
- [ ] Enable webhook signature verification
- [ ] Implement proper error logging
- [ ] Add database integration for order tracking
- [ ] Set up email confirmations

### Testing

Stripe provides test cards for different scenarios:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

### API Routes

**POST `/api/stripe/checkout`**
Creates a new checkout session.

Request:
```json
{
  "productId": "product_1"
}
```

Response:
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

**POST `/api/stripe/webhook`**
Receives and processes Stripe webhook events.

Supported events:
- `checkout.session.completed` - Payment successful
- `checkout.session.async_payment_succeeded` - Async payment succeeded
- `checkout.session.async_payment_failed` - Async payment failed

### Customization

**Adding New Products:**
Edit `lib/stripe/products.ts` to add or modify products:

```typescript
export const products: Product[] = [
  {
    id: "your_product_id",
    name: "Your Product",
    description: "Product description",
    price: 1999, // Price in cents ($19.99)
    currency: "usd",
    image: "https://...",
  },
];
```

**Customizing Checkout:**
Modify `app/api/stripe/checkout/route.ts` to:
- Add custom fields
- Enable shipping address collection
- Add discount codes
- Configure billing address collection

**Handling Webhooks:**
Extend `app/api/stripe/webhook/route.ts` to:
- Update your database
- Send confirmation emails
- Trigger fulfillment processes
- Handle subscription events

## Project Structure

```
app/                # Next.js app router
  actions/          # Server actions (e.g. fetchDataAction)
  api/stripe/       # Stripe API routes (checkout, webhook)
  private/          # Private example page
  stripe-demo/      # Stripe payment demo pages
components/         # UI components (atoms, navbar, theme, stripe, ...)
hooks/              # Custom React hooks
lib/                # Utilities, backend client/server helpers
  stripe/           # Stripe configuration and utilities
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
