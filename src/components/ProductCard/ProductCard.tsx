import './ProductCard.css';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
import { products } from '../../data';
import { useCart } from '../../ShoppingCartContext';
// import { useNavigate } from 'react-router-dom';
// import { products } from '../../data';

type ProductProps = {
	productId: number;
	productName: string;
	productCategory: string;
	productPrice: number;
	productImg: string;
};

function ProductCard({
	productId,
	productName,
	productCategory,
	productPrice,
	productImg,
}: ProductProps) {
	const { addToCart } = useCart();

	function handleAddToCart(productId: number) {
		const product = products.find((p) => p.id === productId);
		if (product) {
			addToCart({ ...product, quantity: 1 });
		}
	}

	return (
		<div className='product-card'>
			<img src={productImg} />
			<h2 className='product-name'>{productName}</h2>
			<h3 className='product-category'>{productCategory}</h3>
			<div>
				<span className='product-price'>£{productPrice}</span>
				<PlusMinusButton
					buttonText='+'
					buttonClick={() => handleAddToCart(productId)}
				/>
			</div>
		</div>
	);
}

export default ProductCard;