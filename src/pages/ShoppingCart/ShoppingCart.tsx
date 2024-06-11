import { useNavigate } from "react-router-dom";

import { useCart } from "../../ShoppingCartContext";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cart } = useCart();

  function handleBack() {
    navigate("/");
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <button onClick={handleBack}>Back to Products</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
