import { create } from "zustand";
import navItems from "@/components/nav/nav-items";

type SearchItem = {
	title: string;
	url: string;
};

type SearchState = {
	items: SearchItem[];
};

export const useSearchStore = create<SearchState>(() => ({
	items: navItems.navMain.flatMap((item) => item.items),
}));
