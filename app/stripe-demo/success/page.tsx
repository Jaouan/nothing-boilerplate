import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/nav/LandingNavBar";

export default function SuccessPage() {
	return (
		<main className="min-h-screen bg-background">
			<LandingNavBar />
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-2xl mx-auto text-center">
					<div className="flex justify-center mb-6">
						<CheckCircle className="w-20 h-20 text-green-500" />
					</div>
					<h1 className="text-4xl font-bold tracking-tight mb-4">
						Payment Successful!
					</h1>
					<p className="text-muted-foreground text-lg mb-8">
						Thank you for your purchase. Your payment has been processed
						successfully. You will receive a confirmation email shortly.
					</p>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground">
							This is a demo page. In a real application, you would see your
							order details and next steps here.
						</p>
						<div className="flex gap-4 justify-center">
							<Button asChild>
								<Link href="/stripe-demo">Back to Demo</Link>
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
