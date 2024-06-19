import { Products } from "../dataTypes/product";

export async function fetchAllProducts(){
	const response = await fetch(
		`http://localhost:3000/products`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data as Products;
}


export async function fetchProductByID(id: number) {
    const allProducts = await fetchAllProducts();
    return allProducts.find((product) => id === product.product_id);
}

export async function fetchDatafromBack(searchTerm: string) {
	const response = await fetch(
		`http://localhost:3000/products?search=${searchTerm}`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data;
}