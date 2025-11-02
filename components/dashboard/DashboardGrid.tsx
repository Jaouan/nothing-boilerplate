import { cn, PropsWithStyle } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export const DashboardGrid: FC<PropsWithChildren<PropsWithStyle>> = ({
	children,
	className,
}) => (
	<div
		className={cn(
			"grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-6 w-full",
			className,
		)}
	>
		{children}
	</div>
);
