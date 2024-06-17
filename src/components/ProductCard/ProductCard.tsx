import './ProductCard.css';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
import { useCart } from '../../ShoppingCartContext';
// import { useNavigate } from 'react-router-dom';
// import { products } from '../../data';

function ProductCard() {
	return (
		<div>
			<img />
			<h2 className='product-name'>Product Name</h2>
			<h3 className='product-category'>Category</h3>
			<div>
				<span className='product-price'>Price</span>
				<PlusMinusButton buttonText='+' />
			</div>
		</div>
	);
}

export default ProductCard;
