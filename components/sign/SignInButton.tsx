"use client";

import { FC, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useUserStore } from "@/stores/useUserStore";
import { cn, PropsWithStyle } from "@/lib/utils";
import { Spinner } from "../ui/shadcn-io/spinner";
import { Button } from "../ui/button";

export const SignInButton: FC<PropsWithStyle> = ({ className }) => {
	const [isWaitingPopin, setIsWaitingPopin] = useState(false);
	const { loading, provider, signInWithGoogle, user } = useUserStore();

	const handleSignIn = async () => {
		setIsWaitingPopin(true);
		await signInWithGoogle();
		setIsWaitingPopin(false);
	};

	if (user) return null;

	return (
		<Button
			type="button"
			onClick={handleSignIn}
			disabled={isWaitingPopin || loading}
			className={cn(loading ? "opacity-0!" : "animate-in", className)}
		>
			{isWaitingPopin ? <Spinner variant="circle" /> : <FaGoogle />} Sign in
			with Google {provider && `(${provider})`}
		</Button>
	);
};
