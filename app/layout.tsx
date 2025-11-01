import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nothing Boilerplate",
	description:
		"A modern, fast and flexible Next.js boilerplate for your web projects.",
	keywords: ["Next.js", "Boilerplate", "React", "TypeScript", "TailwindCSS"],
	openGraph: {
		title: "Nothing Boilerplate",
		description:
			"A modern, fast and flexible Next.js boilerplate for your web projects.",
		url: "https://nothing.jaouan.dev",
		siteName: "Nothing Boilerplate",
		images: [
			{
				url: "https://nothing.jaouan.dev/landing-shot.webp",
				alt: "Nothing Boilerplate OG Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
