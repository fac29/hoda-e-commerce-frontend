import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import { useCart } from "../../ShoppingCartContext";

function ShoppingCart() {
  const navigate = useNavigate();
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const { cart, changeCartAmount, removeFromCart } = useCart();

  function handleBack() {
    navigate("/");
  }

  function changeQuantity(
    e: React.ChangeEvent<HTMLSelectElement>,
    productId: number
  ) {
    setDropDownOpen(true);
    const product = products.find((p) => p.id === productId);
    const howMany = parseInt(e.target.value);
    changeCartAmount({ ...product!, quantity: howMany });
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <button onClick={handleBack}>Back to Products</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - £{item.price}
            <select
              onChange={(e) => changeQuantity(e, item.id)}
              name="quantity"
              id=""
            >
              <option value="">Qty:{item.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
