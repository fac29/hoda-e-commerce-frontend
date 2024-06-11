// We will need to replace with our actualy products
import { products } from "../../data";
import { useCart } from "../../ShoppingCartContext";

function Home() {
  const { addToCart, removeFromCart } = useCart();

  function handleAddToCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  }

  function handleRemove(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      removeFromCart(productId);
    }
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - £{product.price}
            <button onClick={() => handleRemove(product.id)}>-</button>
            <button onClick={() => handleAddToCart(product.id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
