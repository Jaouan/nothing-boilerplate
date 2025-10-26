import { MeshGradient } from "@/components/effects/MeshGradient";
import { CardBold } from "@/components/ui/card-bold";
import { LandingNavBar } from "@/components/nav/LandingNavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoLoop from "@/components/ui/LogoLoop";
import { SectionContainer } from "@/components/ui/landing/SectionContainer";
import { FeatureItem } from "@/components/ui/landing/FeatureItem";
import { FaqItem } from "@/components/ui/landing/FaqItem";
import { StepItem } from "@/components/ui/landing/StepItem";

const imageLogos = [
	{
		src: "/google-brand.svg",
		alt: "Company 1",
		href: "https://company1.com",
	},
];

export default function HomePage() {
	return (
		<main className="relative">
			<LandingNavBar />
			<div className="p-8 min-h-screen flex flex-col items-center justify-center ">
				<div className="absolute h-screen inset-0 -z-10">
					<MeshGradient />
					<div className="pointer-events-none z-1 w-full h-[20%] absolute bottom-0 left-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]"></div>
				</div>
				<div className="mb-8">
					<h1
						id="main-title"
						className="text-4xl font-bold tracking-tight text-foreground text-center sm:text-6xl lg:text-7xl"
					>
						Another <strong>boilerplate</strong> <br />
						that does <em className="italic">nothing</em>
					</h1>
				</div>
				<img
					src="/hand-arrow.svg"
					alt="arrow"
					className="w-30 my-4 dark:invert"
				/>
				<Button asChild>
					<Link href="https://github.com/Jaouan/nothing-boilerplate">
						Fork on GitHub
					</Link>
				</Button>
			</div>

			<div className="p-8 flex items-center justify-center -mt-[10vh] md:-mt-[20vh]">
				<CardBold className="p-0">
					<img
						src="/landing-shot.webp"
						alt="screenshot"
						className="w-full max-w-200"
					/>
				</CardBold>
			</div>
			{/* They trust us section */}
			<section className="w-full py-12 flex flex-col md:flex-row items-center max-w-3xl mx-auto px-4 gap-2">
				<h2 className="text-sm font-light opacity-60 text-nowrap pe-2">
					They trust us
				</h2>
				<LogoLoop
					className="dark:[&_img]:invert md:border-s"
					logos={imageLogos}
					speed={30}
					direction="left"
					logoHeight={48}
					gap={40}
					pauseOnHover
					scaleOnHover
					fadeOut
					fadeOutColor="var(--background)"
					ariaLabel="Technology partners"
				/>
			</section>
			{/* Features section */}
			<SectionContainer>
				<h2 className="text-lg font-semibold tracking-wide mb-8 text-muted-foreground uppercase">
					Features
				</h2>
				<div className="w-full max-w-4xl border rounded-lg overflow-hidden bg-background divide-y divide-border">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-border md:divide-x md:divide-y-0 border-b border-border">
						<FeatureItem
							title="Framework"
							description={
								<>
									Enjoy the power of <strong>Next.js</strong>: file-based
									routing, Server Components, server actions, and a super smooth
									developer experience.
								</>
							}
						/>
						<FeatureItem
							title="Auth"
							description={
								<>
									Choose between <strong>Supabase</strong>,{" "}
									<strong>Better-Auth</strong>, or <strong>Firebase</strong> for
									authentication that fits your needs, server-side or
									client-side.
								</>
							}
						/>
						<FeatureItem
							title="Backend"
							description={
								<>
									Easily connect your app to <strong>Supabase</strong> (client &
									server) or <strong>Firebase</strong> (client) for real-time
									data and effortless scalability.
								</>
							}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-border md:divide-x md:divide-y-0 border-b border-border">
						<FeatureItem
							title="State Management"
							description={
								<>
									Manage your app state with <strong>Zustand</strong>, a
									lightweight and efficient solution for reactive applications.
								</>
							}
						/>
						<FeatureItem
							title="UI / Styling"
							description={
								<>
									Build modern interfaces with <strong>TailwindCSS</strong> and{" "}
									<strong>Shadcn</strong> for a consistent, easily customizable
									design.
								</>
							}
						/>
						<FeatureItem
							title="Code Quality & Formatting"
							description={
								<>
									Keep your code spotless with <strong>Biome</strong>, for
									automatic linting and formatting.
								</>
							}
						/>
					</div>
				</div>
			</SectionContainer>
			{/* How it works section */}
			<SectionContainer>
				<h2 className="text-lg font-semibold tracking-wide mb-8 text-muted-foreground uppercase">
					How it works
				</h2>
				<ol className="max-w-2xl w-full mx-auto border rounded-lg bg-background divide-y divide-border">
					<StepItem
						number={1}
						title="Clone the repo"
						description={
							<>
								Get started by forking or cloning the boilerplate from{" "}
								<a
									href="https://github.com/Jaouan/nothing-boilerplate"
									target="_blank"
									rel="noopener noreferrer"
									className="underline font-medium"
								>
									GitHub
								</a>
								.
							</>
						}
					/>
					<StepItem
						number={2}
						title="Configure your stack"
						description={
							<>Choose your authentication, database, and UI options.</>
						}
					/>
					<StepItem
						number={3}
						title="Build your app"
						description={<>Start coding and ship your product faster.</>}
					/>
				</ol>
			</SectionContainer>

			{/* FAQ section */}
			<SectionContainer>
				<h2 className="text-lg font-semibold tracking-wide mb-8 text-muted-foreground uppercase">
					FAQ
				</h2>
				<div className="max-w-2xl w-full border rounded-lg bg-background divide-y divide-border">
					<FaqItem
						question="Is this boilerplate production-ready?"
						answer={
							<>
								It's a solid starting point, but you should always review and
								adapt for your own needs.
							</>
						}
					/>
					<FaqItem
						question="Can I use my own authentication provider?"
						answer={
							<>Yes, the boilerplate is designed to be flexible and modular.</>
						}
					/>
					<FaqItem
						question="How do I get support?"
						answer={
							<>Open an issue on GitHub or contact the maintainer directly.</>
						}
					/>
				</div>
			</SectionContainer>

			{/* Call to action section */}
			<section className="w-full px-4 py-12 flex flex-col items-center">
				<div className="max-w-xl w-full p-8 flex flex-col items-center gap-4">
					<h2 className="text-lg font-semibold text-center text-foreground">
						Ready to get started?
					</h2>
					<Button asChild size="lg" className="mt-2">
						<Link href="https://github.com/Jaouan/nothing-boilerplate">
							Fork on GitHub
						</Link>
					</Button>
				</div>
			</section>

			{/* Contact section */}
			<section className="w-full px-4 py-12 flex flex-col items-center">
				<div className="max-w-xl w-full p-8 flex flex-col items-center gap-4">
					<p className="text-sm text-muted-foreground text-center">
						Questions, feedback, or partnership? <br />
						<a href="https://jaouan.dev" className="underline text-primary">
							https://jaouan.dev
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}
