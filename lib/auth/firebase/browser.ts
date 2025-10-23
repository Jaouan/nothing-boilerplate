import { AuthBrowserProvider } from "../auth.interface";
import { useUserStore } from "./useUserStore.firebase";

const browserProvider: AuthBrowserProvider = {
	useUserStore,
};

export default browserProvider;
