// We will need to replace with our actualy products
import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import { useCart } from "../../ShoppingCartContext";

import PlusMinusButton from "../../components/PlusMinusButton/PlusMinusButton";
import Button from "../../components/Button/Button";

function Home() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  function handleAddToCart(productId: number) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  }

  //Move to nav bar component!!
  function goToShoppingCart() {
    navigate("/shopping-cart");
  }

  return (
    <div>
      <h1>Products</h1>
      {/* Put in nav bar component!! */}
      <Button
        buttonText="Shopping Cart"
        buttonClick={() => goToShoppingCart()}
        size="large"
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - £{product.price}
            <PlusMinusButton
              buttonText="+"
              buttonClick={() => handleAddToCart(product.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
