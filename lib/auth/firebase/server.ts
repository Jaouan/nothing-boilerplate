import { NextRequest, NextResponse } from "next/server";
import { AuthServerProvider } from "../auth-server.interface";

const nope = () => {
	throw "Firebase provider not implemented.";
};

const provider: AuthServerProvider = {
	authCallback: nope,
	getServerUser: nope,
	authMiddleware: async (request: NextRequest) =>
		NextResponse.next({ request }),
};

export default provider;
