import './ProductList.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product, Products } from '../../utils/dataTypes/product';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchDatafromBack } from '../../utils/fetchData/fetchData';
// import { Link } from 'react-router-dom';

function ProductList() {
	const [products, setProducts] = useState<Products>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await fetchDatafromBack('');
			setProducts(products);
		};

		fetchProducts();
	}, []);

	async function handleSearch(searchTerm: string) {
		console.log('searching:', searchTerm);
		setSearchTerm(searchTerm);
		try {
			const products = await fetchDatafromBack(searchTerm);
			setProducts(products);
		} catch (error) {
			console.error('Failed to fetch products:', error);
		}
	}

	return (
		<>
			<h1>Products</h1>
			<SearchBar onSearch={handleSearch} />
			<div className='products-grid'>
				{products.length > 0 ? (
					products.map((book: Product) => (
						<ProductCard
							key={book.product_id}
							productId={book.product_id}
							productName={book.product_name}
							productCategory={book.category}
							productPrice={book.price}
							productImg={book.product_image}
						/>
					))
				) : (
					<p>No products matching "{searchTerm}" were found in the catalogue</p>
				)}
			</div>
		</>
	);
}

export default ProductList;
