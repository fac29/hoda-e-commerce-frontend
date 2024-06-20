import { fetchProductByID } from '../fetchData/fetchData';
import { Product } from '../dataTypes/product';
import { CartItem } from '../../ShoppingCartContext';

export async function handleAddToCart(
	productId: number,
	addToCart: (item: CartItem) => void
) {
	const products = await fetchProductByID(productId);
	const product = products.find((p: Product) => p.product_id === productId);
	if (product) {
		addToCart(product);
	}
}

export async function handleRemoveFromCart(
	productId: number,
	removeFromCart: (id: number) => void
) {
	const products = await fetchProductByID(productId);
	const product = products.find((p: Product) => p.product_id === productId);
	if (product) {
		removeFromCart(product.product_id);
	}
}
