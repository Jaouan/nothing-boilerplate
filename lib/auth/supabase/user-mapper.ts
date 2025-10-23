import { User as SupabaseUser } from "@supabase/supabase-js";
import { User } from "../auth.interface";

export const mapUser = (user?: SupabaseUser | null): User | null =>
	user
		? {
				id: user.id,
				email: user.email!,
				name: user.user_metadata?.name,
				avatar: user.user_metadata?.avatar_url,
			}
		: null;
