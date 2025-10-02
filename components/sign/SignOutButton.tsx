"use client";

import { useRouter } from "next/navigation";

import { useUserStore } from "@/stores/useUserStore";
import { Button } from "../ui/button";

export const SignOutButton: React.FC = () => {
	const router = useRouter();
	const signOut = useUserStore((state) => state.signOut);

	async function handleLogout() {
		await signOut();
		router.push("/login");
		router.refresh();
	}

	return (
		<Button
			type="button"
			onClick={handleLogout}
			aria-label="Sign out"
			title="Sign out"
		>
			Sign out
		</Button>
	);
};
