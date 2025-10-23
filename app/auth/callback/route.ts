import authServer from "@/lib/auth/server";

export async function GET(request: Request) {
	return authServer.authCallback(request);
}
