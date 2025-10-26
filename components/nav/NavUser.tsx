"use client";

import { ChevronsUpDown, LogOut, Sparkles } from "lucide-react";
import { UserAvatar } from "@/components/auth/UserAvatar";
import type { FC } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { useUserStore } from "@/stores/useUserStore";
import { Skeleton } from "../ui/skeleton";

export const NavUser: FC = () => {
	const { loading, user, signOut } = useUserStore();
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<UserAvatar user={user} loading={loading} />
							<div className="grid flex-1 text-left text-sm leading-tight">
								{loading ? (
									<>
										<Skeleton className="h-4 w-1/2" />
										<Skeleton className="mt-1 h-3 w-3/4" />
									</>
								) : (
									<>
										<span className="truncate font-medium">{user?.name}</span>
										<span className="truncate text-xs">{user?.email}</span>
									</>
								)}
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<UserAvatar user={user} loading={loading} />
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user?.name}</span>
									<span className="truncate text-xs">{user?.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Sparkles />
								Settings
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={signOut}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
