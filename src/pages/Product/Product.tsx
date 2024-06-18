import './Product.css';
// We will need to replace with our actual products
import { products } from '../../data';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';

function Product() {
	function handleSearch(term: string) {
		console.log('searching:', term);
	}
	return (
		<>
			<h1>Products</h1>
			<SearchBar onSearch={handleSearch} />
			<div className='products-grid'>
				{products.map((product) => (
					<ProductCard
						productId={product.id}
						productName={product.name}
						productCategory={product.category}
						productPrice={product.price}
						productImg={product.image}
					/>
				))}
			</div>
		</>
	);
}

export default Product;
