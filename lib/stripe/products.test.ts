import { describe, expect, it } from "vitest";
import { getProductById, products } from "@/lib/stripe/products";

describe("Stripe Products", () => {
	it("should return all products", () => {
		expect(products).toBeDefined();
		expect(products.length).toBeGreaterThan(0);
	});

	it("should have valid product structure", () => {
		for (const product of products) {
			expect(product).toHaveProperty("id");
			expect(product).toHaveProperty("name");
			expect(product).toHaveProperty("description");
			expect(product).toHaveProperty("price");
			expect(product).toHaveProperty("currency");
			expect(typeof product.price).toBe("number");
			expect(product.price).toBeGreaterThan(0);
		}
	});

	it("should get product by id", () => {
		const product = getProductById("product_1");
		expect(product).toBeDefined();
		expect(product?.id).toBe("product_1");
	});

	it("should return undefined for non-existent product", () => {
		const product = getProductById("non_existent");
		expect(product).toBeUndefined();
	});

	it("should have prices in cents", () => {
		for (const product of products) {
			expect(product.price % 1).toBe(0);
		}
	});
});
