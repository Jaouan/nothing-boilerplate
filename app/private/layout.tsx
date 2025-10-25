import { AuthenticatedOnly } from "@/components/auth/AuthenticatedOnly";
import { PrivateLayout } from "@/components/layout/PrivateLayout";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthenticatedOnly>
			<PrivateLayout>{children}</PrivateLayout>
		</AuthenticatedOnly>
	);
}
