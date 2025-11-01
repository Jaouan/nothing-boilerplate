"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import { useUserStore } from "@/stores/useUserStore";
import { redirect, RedirectType } from "next/navigation";
import { FC, PropsWithChildren } from "react";

/**
 * Client-side route guard that renders children only when a Firebase user is authenticated.
 * Not suitable for server-side (SSR) authentication.
 */
export const AuthenticatedOnly: FC<PropsWithChildren> = ({ children }) => {
	const isMounted = useIsMounted();
	const { loading, user } = useUserStore();
	if (loading || !isMounted) return;
	if (!user) return redirect("/", RedirectType.replace);
	return children;
};
