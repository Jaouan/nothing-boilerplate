import { createClient } from "./server.supabase";
import { mapUser } from "./user-mapper";

export async function getServerUser() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	return { user: mapUser(data?.user), error };
}
