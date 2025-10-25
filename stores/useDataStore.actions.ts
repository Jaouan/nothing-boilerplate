import { create } from "zustand";
import { fetchDataAction } from "@/app/actions/fetchDataAction";

type Data = {
	id: string;
	title: string;
	createdAt: string;
};
type DataState = {
	data: Data[] | null;
	loading: boolean;
	error: unknown | null;
	refresh: () => Promise<void>;
};

export const useDataStore = create<DataState>((set) => ({
	data: null,
	loading: true,
	error: null,
	refresh: async () => {
		set({ loading: true });
		try {
			const { data, error } = await fetchDataAction();
			set({
				data: error ? null : data,
				loading: false,
				error: error ?? null,
			});
		} catch (error) {
			set({ data: null, loading: false, error });
		}
	},
}));
