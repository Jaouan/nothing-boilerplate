import * as React from "react";
import { NavGeneric } from "@/components/nav/NavGeneric";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import navItems from "./nav-items";
import { NavStoreUser } from "./NavStoreUser";
import { HeaderLogo } from "../ui/HeaderLogo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" variant="sidebar" {...props}>
			<SidebarHeader>
				<HeaderLogo />
			</SidebarHeader>
			<SidebarContent>
				<NavGeneric title="Group" items={navItems.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<div className="transition-all flex justify-start ms-3 group-data-[state=collapsed]:ms-1">
					<ThemeSwitcher />
				</div>
				<NavStoreUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
