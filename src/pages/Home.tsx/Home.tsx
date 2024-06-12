// We will need to replace with our actualy products
import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import { useCart } from "../../ShoppingCartContext";

function Home() {
  const navigate = useNavigate();

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

  function goToShoppingCart() {
    navigate("/shopping-cart");
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={goToShoppingCart}>Shopping Cart</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - £{product.price}
            <button onClick={() => handleRemoveFromCart(product.id)}>-</button>
            <button onClick={() => handleAddToCart(product.id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
