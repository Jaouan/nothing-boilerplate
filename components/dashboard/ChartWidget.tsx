import React from "react";
import { DashboardWidget, WidgetSize } from "./DashboardWidget";

type ChartWidgetProps = {
	title: string;
	subtitle?: string;
	size?: WidgetSize;
	children: React.ReactNode;
};

export const ChartWidget: React.FC<ChartWidgetProps> = ({
	title,
	subtitle,
	size = "L",
	children,
}) => (
	<DashboardWidget size={size}>
		<div className="mb-2">
			<h3 className="text-sm font-semibold">{title}</h3>
			{subtitle && (
				<p className="text-xs font-light text-muted-foreground">{subtitle}</p>
			)}
		</div>
		<div className="w-full h-full flex items-center justify-center">
			{children}
		</div>
	</DashboardWidget>
);
