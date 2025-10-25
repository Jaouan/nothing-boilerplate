import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./auth";

export const authProxy = async (request: NextRequest) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) return NextResponse.redirect(new URL("/", request.url));
	return NextResponse.next();
};
