import { NextRequest, NextResponse } from "next/server";
import { AuthServerProvider } from "../auth-server.interface";
import { mockedUser } from "./mocked-user";

const provider: AuthServerProvider = {
	authCallback: async () => NextResponse.redirect(`${origin}/private`),
	getServerUser: async () => ({ user: mockedUser }),
	authMiddleware: async (request: NextRequest) =>
		NextResponse.next({ request }),
};

export default provider;
