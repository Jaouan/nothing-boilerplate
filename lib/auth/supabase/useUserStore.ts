import { create } from "zustand";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/auth/supabase/client";
import { UserState } from "@/lib/auth/auth.interface";
import { mapUser } from "./user-mapper";

const supabase = createClient();

export const useUserStore = create<UserState>((set) => ({
	provider: "supabase",
	user: null,
	loading: true,
	error: null,
	signOut: async () => {
		set({ loading: true });
		const { error } = await supabase.auth.signOut();
		set({
			user: null,
			loading: false,
			error: error ?? null,
		});
		redirect("/");
	},
	signInWithGoogle: async (
		redirectTo = `${window.location.origin}/auth/callback`,
	) => {
		set({ loading: true });
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: { redirectTo },
		});
		set({ loading: false, error: error ?? null });
	},
}));

supabase.auth.getSession().then(({ data: { session }, error }) => {
	useUserStore.setState({
		user: mapUser(session?.user),
		loading: false,
		error: error ?? null,
	});
});

supabase.auth.onAuthStateChange((_event, session) => {
	useUserStore.setState({
		user: mapUser(session?.user),
		loading: false,
		error: null,
	});
});
