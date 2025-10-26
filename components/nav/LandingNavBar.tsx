"use client";

import { SignInButton } from "@/components/sign/SignInButton";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { useUserStore } from "@/stores/useUserStore";
import Link from "next/link";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { Button } from "../ui/button";
import { UserAvatar } from "../auth/UserAvatar";
import type { FC } from "react";

export const LandingNavBar: FC = () => {
	const { loading, user } = useUserStore();
	return (
		<nav className="fixed top-0 left-0 w-full p-3 md:p-6 flex justify-center z-2">
			<div className="overflow-hidden w-full max-w-250 z-50 backdrop-blur-xl bg-background/50 border flex items-center justify-between gap-4 p-2 rounded-2xl ">
				<HeaderLogo className="ms-2 max-sm:[&>div]:hidden w-fit" />
				<div className="flex items-center gap-2">
					<ThemeSwitcher className="max-sm:hidden me-1.5" />
					{user ? (
						<>
							<Button asChild className="h-8">
								<Link href="/private">Dashboard</Link>
							</Button>
							<UserAvatar user={user} loading={loading} />
						</>
					) : (
						<SignInButton className="h-8" />
					)}
				</div>
			</div>
		</nav>
	);
};
