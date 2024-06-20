export type Product = {
	product_id: number;
	product_name: string;
	product_author: string;
	product_description: string;
	category: string;
	price: number;
	product_image: string;
	stock: number;
	quantity: number;
};

export type Products = Product[];
