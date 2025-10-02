import { Activity, BoxIcon } from "lucide-react";

export default {
	navMain: [
		{
			title: "Samples",
			url: "#",
			icon: BoxIcon,
			items: [
				{ title: "Dashboard", url: "/private" },
				{ title: "Table", url: "/private/table" },
			],
		},
		{
			title: "Useless",
			url: "#",
			icon: Activity,
			items: [
				{ title: "Foo", url: "#" },
				{ title: "Bar", url: "#" },
			],
		},
	],
};
