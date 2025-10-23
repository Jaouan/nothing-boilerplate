import { NextRequest, NextResponse } from "next/server";
import { AuthServerProvider } from "../auth-server.interface";
import { authCallback } from "./auth-callback.supabase";
import { getServerUser } from "./getServerUser.supabase";

const provider: AuthServerProvider = {
	authCallback,
	getServerUser,
	authMiddleware: async (request: NextRequest) =>
		NextResponse.next({ request }),
};

export default provider;
