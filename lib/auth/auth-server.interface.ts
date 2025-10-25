import type { NextRequest, NextResponse } from "next/server";
import { User } from "./auth.interface";

export type AuthServerProvider = {
	authCallback: (request: Request) => Promise<NextResponse<unknown>>;
	authMiddleware: (request: NextRequest) => Promise<NextResponse>;
	getServerUser: (
		request: Request,
	) => Promise<{ user: User | null; error?: unknown | null }>;
};
