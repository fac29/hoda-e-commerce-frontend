import './OrderTable.css';

export type OrderDetails = {
	user_id?: number;
	order_id: number;
	products: OrderProduct[];
};

export type OrderProduct = {
	product_id: number;
	product_name: string;
	price: number;
	quantity: number;
};

export default function OrderTable({ order_id, products }: OrderDetails) {
	return (
		<>
			<h2>Order #{order_id} complete!</h2>
			<table>
				<thead>
					<th>Product Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
				</thead>
				<tbody>
					{products
						? products.map((product) => (
								<tr key={product.product_id}>
									<th>{product.product_name}</th>
									<th>£{product.price / 100}</th>
									<th>{product.quantity}</th>
									<th>£{(product.price / 100) * product.quantity}</th>
								</tr>
							))
						: ''}
				</tbody>
			</table>
		</>
	);
}
