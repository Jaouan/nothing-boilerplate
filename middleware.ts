"server only";

import type { NextRequest } from "next/server";
import authServer from "@/lib/auth/server";

export async function middleware(request: NextRequest) {
	return await authServer.authMiddleware(request);
}

export const config = {
	matcher: ["/private", "/admin/:path*"],
};
