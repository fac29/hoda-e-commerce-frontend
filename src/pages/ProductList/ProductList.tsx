import './ProductList.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product, Products } from '../../dataTypes/product';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

async function fetchDatafromBack() {
	const response = await fetch('http://localhost:3000/products');

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data;
}

function ProductList() {
	const [products, setProducts] = useState<Products>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await fetchDatafromBack();
			setProducts(products);
		};

		fetchProducts();
	}, []);

	function handleSearch(term: string) {
		console.log('searching:', term);
	}

	return (
		<>
			<h1>Products</h1>
			<SearchBar onSearch={handleSearch} />
			<div className='products-grid'>
				{products?.map((book: Product) => (
					<ProductCard
						productId={book.product_id}
						productName={book.product_name}
						productCategory={book.category}
						productPrice={book.price}
						productImg={book.product_image}
					/>
				))}
			</div>
		</>
	);
}

export default ProductList;
