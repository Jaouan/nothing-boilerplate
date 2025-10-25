"use client";

import { useUserStore } from "@/stores/useUserStore";
import { redirect, RedirectType } from "next/navigation";
import { FC, PropsWithChildren } from "react";

/**
 * Client-side route guard that renders children only when a Firebase user is authenticated.
 * Not suitable for server-side (SSR) authentication.
 */
export const AuthenticatedOnly: FC<PropsWithChildren> = ({ children }) => {
	const { loading, user } = useUserStore();
	if (loading) return;
	if (!user) redirect("/", RedirectType.replace);
	return children;
};
