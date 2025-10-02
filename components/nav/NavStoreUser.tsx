import { getServerUser } from "@/lib/supabase/getServerUser";
import { FC } from "react";
import { NavUser } from "./NavUser";

export const NavStoreUser: FC = async () => {
	const { user } = await getServerUser();
	return (
		<NavUser
			user={{
				name: user?.user_metadata?.name,
				email: user?.email ?? "",
				avatar: user?.user_metadata?.avatar_url ?? "",
			}}
		/>
	);
};
