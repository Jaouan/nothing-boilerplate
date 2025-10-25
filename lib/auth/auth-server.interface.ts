import type { NextRequest, NextResponse } from "next/server";
import { User } from "./auth.interface";

export type AuthServerProvider = {
	authProxy: (request: NextRequest) => Promise<NextResponse>;
	getServerUser: (
		request: Request,
	) => Promise<{ user: User | null; error?: unknown | null }>;
};
