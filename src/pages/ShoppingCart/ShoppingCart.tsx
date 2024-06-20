import { useNavigate } from 'react-router-dom';

import { useCart } from '../../ShoppingCartContext';

function ShoppingCart() {
	const navigate = useNavigate();

	const { cart, total, handleRemoveFromCart } = useCart();

	function handleBack() {
		navigate('/');
	}

	// const { addToCart, removeFromCart } = useCart();

	function goToCheckout() {
		navigate('/checkout');
	}

	return (
		<div>
			<h2>Cart Items</h2>
			<button onClick={handleBack}>Back to Products</button>
			<ul>
				{cart.length ? (
					cart.map((item) => (
						<li key={item.product_id}>
							<p>{item.product_name}</p>
							<button onClick={() => handleRemoveFromCart(item.product_id)}>
								-
							</button>
							<p>{item.quantity}</p>
							<p>£{item.price * item.quantity}</p>
						</li>
					))
				) : (
					<h2>You don't have any items in your cart!</h2>
				)}
			</ul>
			{cart.length ? <p>Total:£{total}</p> : null}
			{cart.length ? <button onClick={goToCheckout}>Checkout</button> : null}
		</div>
	);
}

export default ShoppingCart;
