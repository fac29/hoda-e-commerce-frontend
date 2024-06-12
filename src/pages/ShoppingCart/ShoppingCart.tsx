import { useNavigate } from "react-router-dom";

import { products } from "../../data";

import { useCart } from "../../ShoppingCartContext";

function ShoppingCart() {
  const navigate = useNavigate();

  const { cart, total } = useCart();

  function handleBack() {
    navigate("/");
  }

  const { addToCart, removeFromCart } = useCart();

  function handleAddToCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  }

  function handleRemoveFromCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      removeFromCart(productId);
    }
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <button onClick={handleBack}>Back to Products</button>
      <ul>
        {cart.length ? (
          cart.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleAddToCart(item.id)}>+</button>
              <p>£{item.price * item.quantity}</p>
            </li>
          ))
        ) : (
          <h2>You don't have any items in your cart!</h2>
        )}
      </ul>
      {cart.length ? <p>Total:£{total}</p> : null}
    </div>
  );
}

export default ShoppingCart;
