import { CircleDashed } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const HeaderLogo: FC = () => (
	<Link
		href="/"
		className="cursor-pointer flex items-center justify-start gap-3 text-lg w-full px-2 py-3 font-bold text-nowrap"
	>
		<CircleDashed className="!size-6" />
		<div className="group-data-[state=collapsed]:hidden">nothing</div>
	</Link>
);
