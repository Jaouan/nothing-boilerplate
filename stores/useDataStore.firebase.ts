import { create } from "zustand";
import {
	collection,
	getDocs,
	getFirestore,
	onSnapshot,
} from "firebase/firestore";
import { firebaseApp } from "@/lib/auth/firebase/firebase";

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
	subscribe: () => () => void;
};

export const useDataStore = create<DataState>((set) => ({
	data: null,
	loading: true,
	error: null,
	refresh: async () => {
		set({ loading: true });
		try {
			const db = getFirestore(firebaseApp);
			const querySnapshot = await getDocs(collection(db, "demo"));
			const data: Data[] = querySnapshot.docs.map((doc) => {
				const d = doc.data();
				return {
					id: doc.id,
					title: d.title,
					createdAt: d.createdAt,
				};
			});
			set({ data, loading: false, error: null });
		} catch (error) {
			set({ data: null, loading: false, error });
		}
	},
	subscribe: () => {
		const db = getFirestore(firebaseApp);
		const unsubscribe = onSnapshot(
			collection(db, "demo"),
			(querySnapshot) => {
				const data: Data[] = querySnapshot.docs.map((doc) => {
					const d = doc.data();
					return {
						id: doc.id,
						title: d.title,
						createdAt: d.createdAt,
					};
				});
				set({ data });
			},
			(error) => {
				set({ error });
			},
		);
		return unsubscribe;
	},
}));
