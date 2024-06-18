import './ProductList.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product, Products } from '../../dataTypes/product';
import { useEffect, useState } from 'react';
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

	return (
		<>
			<h1>Products</h1>
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
