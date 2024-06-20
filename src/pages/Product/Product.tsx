import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { fetchProductByID } from '../../utils/fetchData/fetchData';
import { Product } from '../../utils/dataTypes/product';
// import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
// import handleAddToCart from '../../utils/handleAddToCart';
// import ProductCard from '../../components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
	const { id } = useParams<{ id: string }>(); // Extract the id as a string
	const idAsNumber = id ? parseInt(id) : NaN;
	const [product, setProduct] = useState<Product>({} as Product);
	useEffect(() => {
		const fetchProducts = async () => {
			const fetchedData = await fetchProductByID(idAsNumber);
			console.log('Fetched data:', fetchedData);
			setProduct(fetchedData as Product);
		};
		fetchProducts();
	}, []);
	return (
		<>
			<h2> See the book in more detail!</h2>
			{product.product_name ? (
				<>
					<ul>
						<li className='product-name'>{product.product_name}</li>
						<li className='product- author'>{product.product_author}</li>
						<li className='product-category'>{product.category}</li>
						<li className='product-description'>
							{product.product_description}
						</li>
						<li className='product-price'>£{product.price / 100}</li>
						<li className='product-image'>
							<img
								style={{ maxHeight: 200 }}
								src={'/' + product.product_image}
							/>
						</li>
					</ul>
				</>
			) : (
				<p>Loading...</p>
			)}

			<div> add to cart</div>
			<div className='reviews-container'>
				<ReviewsList productId={3}></ReviewsList>
				<div />
			</div>
		</>
	);
}
