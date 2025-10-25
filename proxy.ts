"server only";

import type { NextRequest } from "next/server";
import authServer from "@/lib/auth/server";

export async function proxy(request: NextRequest) {
	return await authServer.authProxy(request);
}

export const config = {
	matcher: ["/private", "/admin/:path*"],
};
