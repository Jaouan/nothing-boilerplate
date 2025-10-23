import { NextResponse } from "next/server";
import { createClient } from "./server.supabase";

export const authCallback = async (request: Request) => {
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get("code");
	const next = searchParams.get("next") ?? "/private";

	if (code) {
		const supabase = await createClient();
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) return NextResponse.redirect(`${origin}${next}`);
	}

	return NextResponse.redirect(`${origin}/auth/auth-code-error`);
};
