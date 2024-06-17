// We will need to replace with our actualy products
import { useNavigate } from 'react-router-dom';
import { products } from '../../data';
import { useCart } from '../../ShoppingCartContext';

import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
import Button from '../../components/Button/Button';
import ProductCard from '../../components/ProductCard/ProductCard';

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
		navigate('/shopping-cart');
	}

	return (
		<div>
			<h1>Products</h1>
			{/* Put in nav bar component!! */}
			<Button
				buttonText='Shopping Cart'
				buttonClick={() => goToShoppingCart()}
				size='large'
			/>
			<ul>
				{products.map((product) => (
					<ProductCard
						productId={product.id}
						productName={product.name}
						productCategory={product.category ?? 'Category'}
						productPrice={product.price}
						productImg={product.img ?? 'https://placehold.co/404x244'}
					/>
					// <li key={product.id}>
					//   {product.name} - £{product.price}
					//   <PlusMinusButton
					//     buttonText="+"
					//     buttonClick={() => handleAddToCart(product.id)}
					//   />
					// </li>
				))}
			</ul>
		</div>
	);
}
export default Home;
