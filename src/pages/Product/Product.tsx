import { ProductDetailCard } from '../../components/ProductDetailCard/ProductDetails';
import { fetchProductByID } from '../../utils/fetchData/fetchData';
import { Product } from '../../utils/dataTypes/product';
import { useParams } from 'react-router-dom';
// import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
// import handleAddToCart from '../../utils/handleAddToCart';
// import ProductCard from '../../components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';

export default function ProductPage() {
	const [product, setProduct] = useState<Product>({} as Product);
	const { id } = useParams<{ id: string }>(); // Extract the id as a string
	const idAsNumber = id ? parseInt(id) : NaN;
	useEffect(() => {
		const fetchProducts = async () => {
			const fetchedData = await fetchProductByID(idAsNumber);
			console.log('Fetched data:', fetchedData);
			setProduct(fetchedData as Product);
		};
		fetchProducts();
	}, []);
	return (
		<ProductDetailCard
			product_id={product.product_id}
			product_name={product.product_name}
			product_author={product.product_author}
			category={product.category}
			product_description={product.product_description}
			price={product.price}
			product_image={product.product_image}
		/>
	);
}
