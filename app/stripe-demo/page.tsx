import { Products } from "@/components/stripe/Products";
import { LandingNavBar } from "@/components/nav/LandingNavBar";

export default function StripeDemoPage() {
	return (
		<main className="min-h-screen bg-background">
			<LandingNavBar />
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold tracking-tight mb-4">
						Stripe Payment Demo
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Choose a plan below to experience our secure Stripe payment
						integration. This is a demonstration - no real charges will be made.
					</p>
				</div>
				<Products />
			</div>
		</main>
	);
}
