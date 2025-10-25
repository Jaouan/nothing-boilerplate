import { User as BetterAuthUser } from "better-auth";
import { User } from "../auth.interface";

export const mapUser = (user?: BetterAuthUser | null): User | null =>
	user
		? {
				id: user.id,
				email: user.email!,
				name: user.name,
				avatar: user.image ?? null,
			}
		: null;
