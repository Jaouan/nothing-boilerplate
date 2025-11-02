"use client";

import { ChartContainer } from "@/components/ui/chart";
import { DashboardGrid } from "../../components/dashboard/DashboardGrid";
import { KpiWidget } from "../../components/dashboard/KpiWidget";
import { ChartWidget } from "../../components/dashboard/ChartWidget";
import { Bar, BarChart } from "recharts";

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

export default function DashboardPage() {
	return (
		<DashboardGrid className="md:p-6">
			<KpiWidget
				title="Revenues"
				subtitle="This month"
				kpi={7540000}
				compact
				unit="$"
				trend={8}
				size="S"
			/>
			<KpiWidget
				title="Revenues"
				subtitle="This month"
				kpi={7540000}
				compact
				unit="$"
				trend={8}
				size="S"
			/>
			<KpiWidget
				title="Users"
				subtitle="Active today"
				kpi={320}
				trend={3}
				size="S"
			/>
			<KpiWidget
				title="Users"
				subtitle="Active today"
				kpi={320}
				trend={0}
				size="S"
			/>
			<KpiWidget
				title="Conversion rate"
				subtitle="This week"
				kpi={0.42}
				unit="%"
				trend={-1.2}
				size="M"
			/>
			<KpiWidget
				title="Support tickets"
				subtitle="Open"
				kpi={12}
				trend={2}
				size="M"
			/>
			<ChartWidget
				title="Users by device"
				subtitle="Monthly breakdown"
				size="M"
			>
				<ChartContainer
					config={{
						desktop: {
							label: "Desktop",
							color: "var(--foreground)",
						},
						mobile: {
							label: "Mobile",
							color: "color-mix(in hsl, var(--foreground), transparent 40%)",
						},
					}}
					className="min-h-[200px] w-full"
				>
					<BarChart accessibilityLayer data={chartData}>
						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
						<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
					</BarChart>
				</ChartContainer>
			</ChartWidget>
			<ChartWidget
				title="Users by device"
				subtitle="Monthly breakdown"
				size="M"
			>
				<ChartContainer
					config={{
						desktop: {
							label: "Desktop",
							color: "var(--foreground)",
						},
						mobile: {
							label: "Mobile",
							color: "color-mix(in hsl, var(--foreground), transparent 40%)",
						},
					}}
					className="min-h-[200px] w-full"
				>
					<BarChart accessibilityLayer data={chartData}>
						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
						<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
					</BarChart>
				</ChartContainer>
			</ChartWidget>
		</DashboardGrid>
	);
}
