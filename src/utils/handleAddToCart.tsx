import { useCart } from '../ShoppingCartContext';
const { addToCart } = useCart();

function handleAddToCart(productId: number) {
	const product = products.find((p) => p.id === productId);
	if (product) {
		addToCart({ ...product, quantity: 1 });
	}
}

export default handleAddToCart;
