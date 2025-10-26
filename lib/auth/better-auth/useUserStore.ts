import { createAuthClient } from "better-auth/react";
import { create, StoreApi, UseBoundStore } from "zustand";
import { redirect } from "next/navigation";
import { UserState } from "../auth.interface";
import { mapUser } from "./user-mapper";

const authClient = createAuthClient({});

const useGenericAuthStore = create<UserState>((set) => ({
	provider: "better-auth",
	user: null,
	loading: true,
	error: null,
	signOut: async () => {
		set({ loading: true });
		const { error } = await authClient.signOut();
		set({
			user: null,
			loading: false,
			error,
		});
		redirect("/");
	},
	signInWithGoogle: async () => {
		set({ loading: true });
		const data = await authClient.signIn.social({
			provider: "google",
		});
		set({ loading: false, error: data.error ?? null });
	},
}));

export const useUserStore: UseBoundStore<StoreApi<UserState>> = (() => {
	const { data: session, isPending, error } = authClient.useSession();
	const currentState = useGenericAuthStore.getState();
	if (
		session?.user.id !== currentState.user?.id ||
		isPending !== currentState.loading ||
		error !== currentState.error
	) {
		queueMicrotask(() => {
			useGenericAuthStore.setState({
				user: mapUser(session?.user),
				loading: isPending,
				error,
			});
		});
	}
	return useGenericAuthStore();
}) as UseBoundStore<StoreApi<UserState>>;
