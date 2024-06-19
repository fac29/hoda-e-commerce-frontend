import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { fetchProductByID } from '../../utils/fetchData/fetchData';
import { Product } from '../../utils/dataTypes/product';
import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
import handleAddToCart from '../../utils/handleAddToCart';

type ProductPageProps = {
	productId: number;
	productName: string;
	productCategory: string;
	productPrice: number;
	productImg: string;
	reviews: JSX.Element;
};

export default function ProductPage() {
	// I need to get the id (from image clicked)
	//const product: Product = await fetchProductByID(3);
	//from this pass the info
	return (
		<>
			<h2> See the book in more detail!</h2>
			{/* <h1 className='product-name'>{(productName = product.product_name)}</h1> */}
			<img></img>
			<span>product description</span>
			<ReviewsList productId={3}></ReviewsList>
			<div> add to cart</div>
			{/* <img className='product-img' src={(productImg = product.product_image)} /> */}

			<h3 className='product-category'>
				{/* {(productCategory = product.category)} */}
			</h3>
			<div>
				{/* <span className='product-price'>£{productPrice / 100}</span> */}
				<PlusMinusButton
					buttonText='+'
					// buttonClick={() => handleAddToCart(productId)}
				/>
			</div>
			<div className='reviews-container'>
				{' '}
				{/* {reviews} */}
				<div />
			</div>
		</>
	);
}
