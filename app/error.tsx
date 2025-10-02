"use client";

import { PublicLayout } from "@/components/layout/PublicLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";

type ErrorProps = {
	error: Error;
	reset: () => void;
};
export default function ErrorPage({ error }: ErrorProps) {
	const displayError = `${error.message || error}`;
	return (
		<PublicLayout>
			<div className="w-full max-w-lg flex flex-col items-center gap-4">
				<Alert variant="destructive">
					<AlertCircleIcon />
					<AlertTitle>Something went wrong! Please try again later.</AlertTitle>
					<AlertDescription>
						{displayError && (
							<pre className="block w-full card px-4 py-2 bg-base-300 text-base-content">
								{displayError}
							</pre>
						)}
					</AlertDescription>
				</Alert>
				<Button type="button" asChild>
					<Link href="/private">Go back home</Link>
				</Button>
			</div>
		</PublicLayout>
	);
}
