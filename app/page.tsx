import { Grain } from "@/components/effects/Grain";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { SignInButton } from "@/components/sign/SignInButton";

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-8">
			<Grain />
			<h1 className="text-5xl font-bold">Welcome to the Home Page</h1>
			<p className="my-8 text-lg">
				This is the main landing page of the application.
			</p>
			<SignInButton />
			<div className="absolute bottom-4 right-4">
				<ThemeSwitcher />
			</div>
		</main>
	);
}
