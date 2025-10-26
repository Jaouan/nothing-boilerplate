import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/config";
import { getProductById } from "@/lib/stripe/products";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { productId } = body;

		if (!productId) {
			return NextResponse.json(
				{ error: "Product ID is required" },
				{ status: 400 },
			);
		}

		const product = getProductById(productId);

		if (!product) {
			return NextResponse.json({ error: "Product not found" }, { status: 404 });
		}

		const origin = request.headers.get("origin") || "http://localhost:3000";

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: product.currency,
						product_data: {
							name: product.name,
							description: product.description,
							images: product.image ? [product.image] : [],
						},
						unit_amount: product.price,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `${origin}/stripe-demo/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/stripe-demo/cancel`,
			metadata: {
				productId: product.id,
			},
		});

		return NextResponse.json({ sessionId: session.id, url: session.url });
	} catch (error) {
		console.error("Error creating checkout session:", error);
		return NextResponse.json(
			{ error: "Failed to create checkout session" },
			{ status: 500 },
		);
	}
}
