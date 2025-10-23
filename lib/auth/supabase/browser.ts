import { AuthBrowserProvider } from "../auth.interface";
import { useUserStore } from "./useUserStore.supabase";

const browserProvider: AuthBrowserProvider = {
	useUserStore,
};

export default browserProvider;
