import { AuthBrowserProvider } from "../auth.interface";
import { useUserStore } from "./useUserStore";

const browserProvider: AuthBrowserProvider = {
	isSsrAuth: false,
	useUserStore,
};

export default browserProvider;
