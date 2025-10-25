import { headers } from "next/headers";
import { AuthServerProvider } from "../auth-server.interface";
import { auth } from "./auth";
import { authProxy } from "./proxy";
import { mapUser } from "./user-mapper";

const provider: AuthServerProvider = {
	getServerUser: async () => {
		const session = await auth.api.getSession({
			headers: await headers(),
		});
		return { user: mapUser(session?.user) };
	},
	authProxy,
};

export default provider;
