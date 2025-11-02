import { create } from "zustand";
import { UserState } from "../auth.interface";
import { mockedUser } from "./mocked-user";
import { IS_CLIENT } from "@/lib/constants";
import { toast } from "sonner";

const isAlreadyConnected =
	IS_CLIENT && sessionStorage.getItem("mock-auth-connected") === "true";

export const useUserStore = create<UserState>((set) => ({
	provider: "mock",
	user: isAlreadyConnected ? mockedUser : null,
	session: null,
	loading: false,
	error: null,
	signOut: async () => {
		sessionStorage.removeItem("mock-auth-connected");
		set({ user: null, loading: false, error: null });
		location.assign("/");
	},
	signInWithGoogle: async () => {
		sessionStorage.setItem("mock-auth-connected", "true");
		set({ user: mockedUser, loading: false });
		toast.success("Mock sign-in successful!");
	},
}));
