import { AuthBrowserProvider } from "../auth.interface";
import { useUserStore } from "./useUserStore.mock";

const browserProvider: AuthBrowserProvider = {
	useUserStore,
};

export default browserProvider;
