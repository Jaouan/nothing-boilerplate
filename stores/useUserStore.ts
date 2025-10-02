import type { AuthError, Session, User } from "@supabase/supabase-js";
import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

type UserState = {
	user: User | null;
	session: Session | null;
	loading: boolean;
	error: AuthError | null;
	signOut: () => Promise<void>;
	signInWithGoogle: (redirectTo?: string) => Promise<AuthError | null>;
};

const supabase = createClient();

export const useUserStore = create<UserState>((set) => ({
	user: null,
	session: null,
	loading: true,
	error: null,
	signOut: async () => {
		set({ loading: true });
		const { error } = await supabase.auth.signOut();
		set({
			user: null,
			session: null,
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
		return error ?? null;
	},
}));

supabase.auth.getSession().then(({ data: { session }, error }) => {
	useUserStore.setState({
		session,
		user: session?.user ?? null,
		loading: false,
		error: error ?? null,
	});
});

supabase.auth.onAuthStateChange((_event, session) => {
	useUserStore.setState({
		session,
		user: session?.user ?? null,
		loading: false,
		error: null,
	});
});
