"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { usePathname } from "next/navigation";

export function NavCollapsible({
	...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root> & {
	links?: string[];
}) {
	const path = usePathname();
	return (
		<CollapsiblePrimitive.Root
			data-slot="collapsible"
			defaultOpen={props.links?.includes(path)}
			{...props}
		/>
	);
}
