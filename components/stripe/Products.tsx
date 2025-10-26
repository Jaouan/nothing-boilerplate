"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { products } from "@/lib/stripe/products";
import { ProductCard } from "./ProductCard";

const _stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

export function Products() {
	const [loading, setLoading] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleCheckout = async (productId: string) => {
		try {
			setLoading(productId);
			setError(null);

			const response = await fetch("/api/stripe/checkout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ productId }),
			});

			if (!response.ok) {
				throw new Error("Failed to create checkout session");
			}

			const { url } = await response.json();

			if (url) {
				window.location.href = url;
			} else {
				throw new Error("No checkout URL received");
			}
		} catch (err) {
			console.error("Checkout error:", err);
			setError(
				err instanceof Error ? err.message : "Failed to initiate checkout",
			);
			setLoading(null);
		}
	};

	return (
		<div>
			{error && (
				<div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded mb-6 max-w-2xl mx-auto">
					<p className="font-medium">Error</p>
					<p className="text-sm">{error}</p>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onCheckout={() => handleCheckout(product.id)}
						isLoading={loading === product.id}
					/>
				))}
			</div>
		</div>
	);
}
