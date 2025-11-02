import React from "react";
import { MdRemove } from "react-icons/md";
import { DashboardWidget, WidgetSize } from "./DashboardWidget";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface KpiWidgetProps {
	title: string;
	subtitle?: string;
	kpi: number;
	unit?: string;
	compact?: boolean;
	trend?: number | null;
	size?: WidgetSize;
}

const formatKpi = (value: number, unit?: string, compact?: boolean) => {
	let displayValue = value;
	if (unit === "%") {
		displayValue = value * 100;
	}
	if (!compact) return displayValue.toLocaleString();
	if (displayValue >= 1_000_000)
		return `${(displayValue / 1_000_000).toFixed(1)}M`;
	if (displayValue >= 1_000) return `${(displayValue / 1_000).toFixed(1)}K`;
	return displayValue.toString();
};

const trendConfig: Record<
	string,
	{
		className: string;
		icon: React.ReactNode;
		label: (trend: number) => React.ReactNode;
	}
> = {
	positive: {
		className: "flex items-center text-green-600",
		icon: <ArrowUpRight size={14} />,
		label: (trend: number) => <span className="ml-1">+{trend}%</span>,
	},
	negative: {
		className: "flex items-center text-red-600",
		icon: <ArrowDownRight size={14} />,
		label: (trend: number) => <span className="ml-1">{trend}%</span>,
	},
	steady: {
		className: "flex items-center text-muted-foreground",
		icon: <MdRemove size={14} title="Steady" />,
		label: (_trend: number) => "steady",
	},
};

export const KpiWidget: React.FC<KpiWidgetProps> = ({
	title,
	subtitle,
	kpi,
	unit,
	compact = false,
	trend,
	size = "S",
}) => {
	let trendNode: React.ReactNode = null;
	if (trend !== null && trend !== undefined) {
		let configKey = "steady";
		if (trend > 0) configKey = "positive";
		else if (trend < 0) configKey = "negative";
		const config = trendConfig[configKey];
		trendNode = (
			<span className={config.className}>
				{config.icon}
				{config.label(trend)}
			</span>
		);
	}

	return (
		<DashboardWidget size={size}>
			<div className="flex md:flex-row flex-col flex-wrap md:items-center gap-2">
				<span className="text-3xl font-bold">
					{formatKpi(kpi, unit, compact)}
					{unit && <span className="text-base font-normal ml-1">{unit}</span>}
				</span>
				{trendNode && <span className="text-xs">{trendNode}</span>}
			</div>
			<div>
				<h3 className="text-sm text-muted-foreground">{title}</h3>
				{subtitle && (
					<p className="text-xs font-light text-muted-foreground">{subtitle}</p>
				)}
			</div>
		</DashboardWidget>
	);
};
