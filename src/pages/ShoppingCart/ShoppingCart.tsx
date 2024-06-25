import { useNavigate } from 'react-router-dom';

import { useCart } from '../../ShoppingCartContext';
import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';

const requestUrl = import.meta.env.VITE_REQUEST_URL;

function ShoppingCart() {
	const navigate = useNavigate();

	const { cart, total, handleRemoveFromCart, handleAddToCart } = useCart();

	function handleBack() {
		navigate('/');
	}

	function goToCheckout() {
		navigate('/checkout');
	}

	async function handleCheckout() {
		const response = await fetch(`${requestUrl}/checkout`, {
			method: 'POST',
		});
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
							<PlusMinusButton
								buttonText='-'
								buttonClick={() => handleRemoveFromCart(item.product_id)}
							/>
							<PlusMinusButton
								buttonText='+'
								buttonClick={() => handleAddToCart(item.product_id)}
							/>

							<p>{item.quantity}</p>
							<p>£{(item.price * item.quantity) / 100}</p>
						</li>
					))
				) : (
					<h2>You don't have any items in your cart!</h2>
				)}
			</ul>
			{cart.length ? <p>Total: £{total ? total / 100 : null}</p> : null}
			{cart.length ? <button onClick={goToCheckout}>Checkout</button> : null}
		</div>
	);
}

export default ShoppingCart;
