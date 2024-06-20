import './ProductCard.css';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
import { useCart } from '../../ShoppingCartContext';
import { Link } from 'react-router-dom';

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
	const { handleAddToCart } = useCart();
	return (
		<div className='product-card' key={productId}>
			<div className='product-info'>
				<Link
					to={`/products/${productId}`}
					className='product-button'
					key={productId}
				>
					<img className='product-img' src={productImg} />
					<h2 className='product-name'>{productName}</h2>
					<h3 className='product-category'>{productCategory}</h3>
				</Link>
				<div />
				<div>
					<span className='product-price'>£{productPrice / 100}</span>
				</div>
			</div>
			<div className='add-to-cart'>
				<PlusMinusButton
					buttonText='+'
					buttonClick={() => handleAddToCart(productId)}
				/>
			</div>
		</div>
	);
}

export default ProductCard;
