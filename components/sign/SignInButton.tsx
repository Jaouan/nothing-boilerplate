"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useUserStore } from "@/stores/useUserStore";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/shadcn-io/spinner";
import { Button } from "../ui/button";
import Link from "next/link";

export const SignInButton: React.FC = () => {
	const [isWaitingPopin, setIsWaitingPopin] = useState(false);
	const { signInWithGoogle, loading, user } = useUserStore();

	const handleSignIn = async () => {
		setIsWaitingPopin(true);
		await signInWithGoogle();
		setIsWaitingPopin(false);
	};

	if (user) {
		return (
			<Button type="button" className="animate-in" asChild>
				<Link href="/private">Get started</Link>
			</Button>
		);
	}

	return (
		<Button
			type="button"
			onClick={handleSignIn}
			disabled={isWaitingPopin || loading}
			className={cn(loading ? "!opacity-0" : "animate-in")}
		>
			{isWaitingPopin ? <Spinner variant="circle" /> : <FaGoogle />} Sign in
			with Google
		</Button>
	);
};
