import { AuthBrowserProvider } from "../auth.interface";
import { useUserStore } from "./useUserStore";

const browserProvider: AuthBrowserProvider = {
	useUserStore,
};

export default browserProvider;
