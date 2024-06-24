import { Product } from '../../utils/dataTypes/product';
import ReviewsList from '../ReviewsList/ReviewsList';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
import { useCart } from '../../ShoppingCartContext';
import './ProductDetailCard.css';

type ProductDetailCardProps = {
	product_id: Product['product_id'];
	product_name: Product['product_name'];
	product_author: Product['product_author'];
	category: Product['category'];
	product_description: Product['product_description'];
	price: Product['price'];
	product_image: Product['product_image'];
};

export function ProductDetailCard({
	product_id,
	product_name,
	product_author,
	category,
	product_description,
	price,
	product_image,
}: ProductDetailCardProps) {
	const { handleRemoveFromCart, handleAddToCart } = useCart();

	return (
		<>
			<h2> See the book in more detail!</h2>
			{product_name ? (
				<>
					<>
						<div className='buttons'>
							<div className='alignBtnWText'>
								<span>Add 1 to cart</span>
								<PlusMinusButton
									buttonText='+'
									buttonClick={() => handleAddToCart(product_id)}
								/>
							</div>
							<div className='product-image'>
								<img style={{ maxHeight: 200 }} src={'/' + product_image} />
							</div>
							<div className='alignBtnWText'>
								<span>remove 1 from cart</span>
								<PlusMinusButton
									className='buttons'
									buttonText='-'
									buttonClick={() => handleRemoveFromCart(product_id)}
								/>
							</div>
						</div>
					</>
					<ul>
						<li className='product-name'>{product_name}</li>
						<li className='product- author'>{product_author}</li>
						<li className='product-category'>{category}</li>
						<li className='product-description'>{product_description}</li>
						<li className='product-price'>£{price / 100}</li>
					</ul>
				</>
			) : (
				<p>Loading...</p>
			)}

			<div className='reviews-container'>
				<ReviewsList productId={product_id}></ReviewsList>
				<div />
			</div>
		</>
	);
}
