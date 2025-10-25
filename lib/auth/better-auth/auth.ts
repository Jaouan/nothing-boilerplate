import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

export const auth = betterAuth({
	database: new Pool({
		connectionString: process.env.BETTER_AUTH_DATABASE_CONNECTION_STRING,
	}),
	plugins: [nextCookies()],
	socialProviders: {
		google: {
			clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET!,
		},
	},
});
