import { NextRequest, NextResponse } from "next/server";
import { AuthServerProvider } from "../auth-server.interface";
import { mockedUser } from "./mocked-user";

const provider: AuthServerProvider = {
	getServerUser: async () => ({ user: mockedUser }),
	authProxy: async (request: NextRequest) => NextResponse.next({ request }),
};

export default provider;
