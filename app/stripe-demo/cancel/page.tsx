import { XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/nav/LandingNavBar";

export default function CancelPage() {
	return (
		<main className="min-h-screen bg-background">
			<LandingNavBar />
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-2xl mx-auto text-center">
					<div className="flex justify-center mb-6">
						<XCircle className="w-20 h-20 text-orange-500" />
					</div>
					<h1 className="text-4xl font-bold tracking-tight mb-4">
						Payment Cancelled
					</h1>
					<p className="text-muted-foreground text-lg mb-8">
						Your payment was cancelled. No charges were made to your account.
					</p>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							If you experienced any issues during checkout, please try again or
							contact our support team.
						</p>
						<div className="flex gap-4 justify-center">
							<Button asChild>
								<Link href="/stripe-demo">Try Again</Link>
							</Button>
							<Button asChild variant="outline">
								<Link href="/">Home</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
