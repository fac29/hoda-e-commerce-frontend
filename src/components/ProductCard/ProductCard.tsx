import './ProductCard.css';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
//import { useCart } from '../../ShoppingCartContext';
// import { fetchDatafromBack } from '../../utils/fetchData/fetchData';
import { handleAddToCart } from '../../utils/handleCart/handleCart';
import { useCart } from '../../ShoppingCartContext';

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

	return (
		<div className='product-card' key={productId}>
			<img className='product-img' src={productImg} />
			<h2 className='product-name'>{productName}</h2>
			<h3 className='product-category'>{productCategory}</h3>
			<div>
				<span className='product-price'>£{productPrice / 100}</span>
				<PlusMinusButton
					buttonText='+'
					buttonClick={() => handleAddToCart(productId, addToCart)}
				/>
			</div>
		</div>
	);
}

export default ProductCard;
