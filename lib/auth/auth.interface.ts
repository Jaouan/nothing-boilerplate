import type { StoreApi, UseBoundStore } from "zustand";

export interface User {
	id: string;
	email: string;
	name: string | null;
	avatar: string | null;
}

export type UserState = {
	user: User | null;
	loading: boolean;
	error: unknown | null;
	signOut: () => Promise<void>;
	signInWithGoogle: (redirectTo?: string) => Promise<void>;
};

export type AuthBrowserProvider = {
	useUserStore: UseBoundStore<StoreApi<UserState>>;
};
