import { NextRequest, NextResponse } from "next/server";
import { stripe, STRIPE_WEBHOOK_SECRET } from "@/lib/stripe/config";
import type Stripe from "stripe";

export async function POST(request: NextRequest) {
	const body = await request.text();
	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return NextResponse.json(
			{ error: "Missing stripe-signature header" },
			{ status: 400 },
		);
	}

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			STRIPE_WEBHOOK_SECRET,
		);
	} catch (error) {
		console.error("Webhook signature verification failed:", error);
		return NextResponse.json(
			{ error: "Webhook signature verification failed" },
			{ status: 400 },
		);
	}

	try {
		switch (event.type) {
			case "checkout.session.completed": {
				const session = event.data.object as Stripe.Checkout.Session;
				console.log("Payment successful:", {
					sessionId: session.id,
					amount: session.amount_total,
					currency: session.currency,
					productId: session.metadata?.productId,
				});
				// Handle successful payment
				// For example: update database, send confirmation email, etc.
				break;
			}
			case "checkout.session.async_payment_succeeded": {
				const session = event.data.object as Stripe.Checkout.Session;
				console.log("Async payment successful:", session.id);
				break;
			}
			case "checkout.session.async_payment_failed": {
				const session = event.data.object as Stripe.Checkout.Session;
				console.log("Async payment failed:", session.id);
				break;
			}
			default:
				console.log(`Unhandled event type: ${event.type}`);
		}

		return NextResponse.json({ received: true });
	} catch (error) {
		console.error("Error processing webhook:", error);
		return NextResponse.json(
			{ error: "Webhook processing failed" },
			{ status: 500 },
		);
	}
}
