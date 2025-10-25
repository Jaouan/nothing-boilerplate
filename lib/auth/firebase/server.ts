import { NextRequest, NextResponse } from "next/server";
import { AuthServerProvider } from "../auth-server.interface";

const provider: AuthServerProvider = {
	getServerUser: () => {
		throw new Error("Firebase SSR authentication not implemented.");
	},
	authProxy: async (request: NextRequest) => NextResponse.next({ request }),
};

export default provider;
