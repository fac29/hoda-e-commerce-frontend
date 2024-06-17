// We will need to replace with our actualy products
import { products } from '../../data';
import ProductCard from '../../components/ProductCard/ProductCard';

function Home() {
	return (
		<div>
			<h1>Products</h1>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					productName={product.name}
					productCategory={product.category ?? 'Category'}
					productPrice={product.price}
					productImg={product.image ?? 'https://placehold.co/404x244'}
				/>
			))}
		</div>
	);
}
export default Home;
