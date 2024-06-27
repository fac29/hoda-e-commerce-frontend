import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../ShoppingCartContext';
import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
import { Modal } from '../../components/Modal/Modal';
import { useState } from 'react';
const requestUrl = import.meta.env.VITE_REQUEST_URL;

function ShoppingCart() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const {
		cart,
		resetCart,
		total,
		handleRemoveFromCart,
		handleAddToCart,
		loggedIn,
		userID,
		updateOrder,
	} = useCart();

	function handleBack() {
		navigate('/');
	}

	async function handleCheckout() {
		if (loggedIn) {
			const products = [];
			for (const item of cart) {
				const product = {
					product_id: item.product_id,
					product_name: item.product_name,
					price: item.price,
					quantity: item.quantity,
				};
				products.push(product);
			}
			console.log('UserID:', userID);
			const response = await fetch(`${requestUrl}/checkout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userID, products }),
				credentials: 'include',
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Order successful:', data);
				if (data.user_id === userID) {
					updateOrder(data);
				}
				navigate('/checkout');
				resetCart();
			} else {
				const errorData = await response.json();
				console.error('Checkout failed:', errorData.response);
			}
		} else {
			setIsOpen(true);
		}
	}

	return (
		<div className='cart-container'>
			<h2>Cart Items</h2>
			<button onClick={handleBack}>Back to Products</button>
			<ul>
				{cart.length ? (
					cart.map((item) => (
						<div className='cart-item'>
							<li key={item.product_id}>
								<p>{item.product_name}</p>
								<div className='cart-section'>
									<PlusMinusButton
										buttonText='-'
										buttonClick={() => handleRemoveFromCart(item.product_id)}
									/>
									<p>{item.quantity}</p>
									<PlusMinusButton
										buttonText='+'
										buttonClick={() => handleAddToCart(item.product_id)}
									/>
								</div>
								<p>£{(item.price * item.quantity) / 100}</p>
							</li>
						</div>
					))
				) : (
					<h2>You don't have any items in your cart!</h2>
				)}
			</ul>
			{cart.length ? <p>Total: £{total ? total / 100 : null}</p> : null}
			{isOpen && (
				<Modal textModal='Please Log In to Checkout' setIsOpen={setIsOpen} />
			)}
			{cart.length ? <button onClick={handleCheckout}>Checkout</button> : null}
		</div>
	);
}

export default ShoppingCart;
