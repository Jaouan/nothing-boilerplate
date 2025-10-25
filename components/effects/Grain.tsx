"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { GrainGradient } from "@paper-design/shaders-react";

const grainColors = {
	dark: ["#000", "#000", "#FFF"],
	light: ["#FFF", "#AAA"],
};

export const Grain: FC = () => {
	const { resolvedTheme } = useTheme();
	const isDark = resolvedTheme === "dark";
	const colors = isDark ? grainColors.dark : grainColors.light;
	const [colorBack] = colors;

	return (
		<div className="fixed inset-0 -z-10">
			<GrainGradient
				style={{ height: "100%", width: "100%" }}
				colorBack={colorBack}
				softness={0.76}
				intensity={0.45}
				noise={0}
				shape="corners"
				offsetX={0}
				offsetY={0}
				scale={1.1}
				rotation={70}
				speed={1}
				colors={colors}
			/>
		</div>
	);
};
