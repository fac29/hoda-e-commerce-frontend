import OrderTable from '../../components/OrderTable/OrderTable';
import { useCart } from '../../ShoppingCartContext';

// const fetchOrderDetails = () => {};

// const order: OrderDetails = {
// 	orderID: 20,
// 	products: [
// 		{
// 			productName: 'The Great Gatsby',
// 			price: 1099,
// 			quantity: 2,
// 		},
// 	],
// };

function Checkout() {
	const { order } = useCart();

	return (
		<>
			<h1>Checkout</h1>
			{order ? (
				<OrderTable order_id={order.order_id} products={order.products} />
			) : (
				''
			)}
		</>
	);
}
export default Checkout;
