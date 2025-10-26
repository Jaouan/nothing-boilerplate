"use client";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/stripe/products";
import { Loader2 } from "lucide-react";

interface ProductCardProps {
	product: Product;
	onCheckout: () => void;
	isLoading: boolean;
}

export function ProductCard({
	product,
	onCheckout,
	isLoading,
}: ProductCardProps) {
	const formatPrice = (price: number, currency: string) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currency.toUpperCase(),
		}).format(price / 100);
	};

	return (
		<div className="border rounded-lg p-6 flex flex-col hover:shadow-lg transition-shadow">
			{product.image && (
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-48 object-cover rounded-md mb-4"
				/>
			)}
			<h3 className="text-2xl font-bold mb-2">{product.name}</h3>
			<p className="text-muted-foreground mb-4 flex-grow">
				{product.description}
			</p>
			<div className="mt-auto">
				<p className="text-3xl font-bold mb-4">
					{formatPrice(product.price, product.currency)}
				</p>
				<Button onClick={onCheckout} disabled={isLoading} className="w-full">
					{isLoading ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Processing...
						</>
					) : (
						"Purchase Now"
					)}
				</Button>
			</div>
		</div>
	);
}
