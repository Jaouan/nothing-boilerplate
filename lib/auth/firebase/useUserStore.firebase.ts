import {
	getAuth,
	onIdTokenChanged,
	signOut as firebaseSignOut,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { create } from "zustand";
import { redirect } from "next/navigation";
import { UserState } from "../auth.interface";
import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);

export const useUserStore = create<UserState>((set) => ({
	user: null,
	session: null,
	loading: true,
	error: null,
	signOut: async () => {
		set({ loading: true });
		try {
			await firebaseSignOut(auth);
		} catch (error) {
			console.log("Error during sign out:", error);
		} finally {
			set({ user: null, loading: false, error: null });
			redirect("/");
		}
	},
	signInWithGoogle: async () => {
		set({ loading: true });
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (error) {
			set({ loading: false, error });
		}
	},
}));

onIdTokenChanged(auth, (user) => {
	useUserStore.setState({
		user: user
			? {
					id: user.uid!,
					email: user.email!,
					name: user.displayName ?? undefined,
					avatar: user.photoURL ?? undefined,
				}
			: null,
		loading: false,
		error: null,
	});
});
