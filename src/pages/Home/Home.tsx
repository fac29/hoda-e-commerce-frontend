// We will need to replace with our actualy products
import { useNavigate } from 'react-router-dom';
import { products } from '../../data';
import Button from '../../components/Button/Button';
import ProductCard from '../../components/ProductCard/ProductCard';

function Home() {
	const navigate = useNavigate();

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
						key={product.id}
						productName={product.name}
						productCategory={product.category ?? 'Category'}
						productPrice={product.price}
						productImg={product.image ?? 'https://placehold.co/404x244'}
					/>
				))}
			</ul>
		</div>
	);
}
export default Home;
