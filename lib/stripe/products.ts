export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	currency: string;
	image?: string;
}

export const products: Product[] = [
	{
		id: "product_1",
		name: "Starter Plan",
		description: "Perfect for individuals and small projects",
		price: 999,
		currency: "usd",
		image: "https://via.placeholder.com/300x200?text=Starter+Plan",
	},
	{
		id: "product_2",
		name: "Professional Plan",
		description: "Ideal for growing teams and businesses",
		price: 2999,
		currency: "usd",
		image: "https://via.placeholder.com/300x200?text=Professional+Plan",
	},
	{
		id: "product_3",
		name: "Enterprise Plan",
		description: "Designed for large-scale operations",
		price: 9999,
		currency: "usd",
		image: "https://via.placeholder.com/300x200?text=Enterprise+Plan",
	},
];

export const getProductById = (id: string): Product | undefined => {
	return products.find((product) => product.id === id);
};
