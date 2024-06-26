import { useNavigate } from 'react-router-dom';

import { useCart } from '../../ShoppingCartContext';
import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
import { Modal } from '../../components/Modal/Modal';
import { useState } from 'react';
// const requestUrl = import.meta.env.VITE_REQUEST_URL;

function ShoppingCart() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const {
        cart,
        total,
        handleRemoveFromCart,
        handleAddToCart,
        loggedIn,
        // userID,
    } = useCart();

    function handleBack() {
        navigate('/');
    }

    function goToCheckout() {
        if (loggedIn) {
            navigate('/checkout');
        } else {
            setIsOpen(true);
        }
    }

    //   async function handleCheckout() {
    //     const response = await fetch(`${requestUrl}/checkout`, {
    //       method: "POST",
    //     });
    //   }

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
                                buttonClick={() =>
                                    handleRemoveFromCart(item.product_id)
                                }
                            />
                            <PlusMinusButton
                                buttonText='+'
                                buttonClick={() =>
                                    handleAddToCart(item.product_id)
                                }
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
            {isOpen && (
                <Modal
                    textModal='Please Log In to Checkout'
                    setIsOpen={setIsOpen}
                />
            )}
            {cart.length ? (
                <button onClick={goToCheckout}>Checkout</button>
            ) : null}
        </div>
    );
}

export default ShoppingCart;
