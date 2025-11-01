"use client";

import { useUserStore } from "@/stores/useUserStore";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserAvatar } from "../auth/UserAvatar";
import { SignInButton } from "../sign/SignInButton";

export const LandingNavAuthSection: FC = () => {
	const { loading, user } = useUserStore();

	return (
		<div className="min-w-37 flex items-center justify-end gap-2">
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
	);
};
