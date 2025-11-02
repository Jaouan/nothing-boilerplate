import React from "react";
import { Card } from "../ui/card";

const sizeToColSpan: Record<string, string> = {
	XS: "col-span-1",
	S: "col-span-2",
	M: "col-span-4",
	L: "col-span-6",
	XL: "col-span-8",
};
export type WidgetSize = keyof typeof sizeToColSpan;

type DashboardWidgetProps = {
	size?: WidgetSize;
	children: React.ReactNode;
	className?: string;
};

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
	size = "S",
	children,
	className = "",
}) => (
	<Card
		className={`p-6 shadow-none flex flex-col justify-between ${sizeToColSpan[size]} gap-1 ${className}`}
	>
		{children}
	</Card>
);
