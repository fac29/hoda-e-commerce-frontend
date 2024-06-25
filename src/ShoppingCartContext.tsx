import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

import { fetchProductByID } from './utils/fetchData/fetchData';
import { fetchSessionById } from './utils/fetchSession/fetchSession';
import { fetchUserByID } from './utils/fetchUser/fetchUser';
import type User from './utils/dataTypes/user';
import type Session from './utils/dataTypes/session';

export interface CartItem {
	product_id: number;
	product_name: string;
	price: number;
	quantity: number;
}

export interface CartContextType {
	cart: CartItem[];
	total?: number;
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	cartQuantity?: number;
	handleAddToCart: (productId: number) => void;
	handleRemoveFromCart: (productId: number) => void;
	loggedIn: boolean;
	handleLoggedIn: (login: boolean) => void;
	username: string;
	userID: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}

interface CartProviderProps {
	children: ReactNode;
}

export function ShoppingCartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [total, setTotal] = useState<number>();
	const [cartQuantity, setCartQuantity] = useState(0);
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [userID, setUserID] = useState(0);

	useEffect(() => {
		// Calculate the total whenever the cart changes
		const newTotal = cart.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		setTotal(newTotal);

		const quantity = cart.reduce(
			(accumulator, item) => accumulator + item.quantity,
			0
		);
		setCartQuantity(quantity);
	}, [cart]);

	const addToCart = (item: CartItem) => {
		const existingItem = cart.find(
			(cartItem) => cartItem.product_id === item.product_id
		);

		if (existingItem) {
			// If the item is already in the cart, update its quantity
			setCart((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.product_id === item.product_id
						? //Only changes quantity of the item with the right id. The other items quantites remain the same
							{ ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
		} else {
			// If the item is not in the cart, add it
			setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
		}
	};

	const removeFromCart = (id: number) => {
		const existingItem = cart.find((cartItem) => cartItem.product_id === id);

		if (existingItem && existingItem.quantity > 1) {
			// If the item exists and its quantity is greater than 1, decrease its quantity by 1
			setCart((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.product_id === id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				)
			);
		} else {
			// If the item does not exist or its quantity is 1, remove it from the cart
			setCart((prevCart) => prevCart.filter((item) => item.product_id !== id));
		}
	};

	async function handleAddToCart(productId: number) {
		const product = await fetchProductByID(productId).then((product) => {
			return product;
		});
		if (product) {
			addToCart(product);
		}
	}

	async function handleRemoveFromCart(productId: number) {
		const idOfProductToRemove: number = await fetchProductByID(productId).then(
			(product) => {
				if (product) {
					return product?.product_id;
				}
				return 0;
			}
		);
		if (productId > 0) {
			removeFromCart(idOfProductToRemove);
		} else {
			return;
		}
	}

	async function handleLoggedIn(login: boolean) {
		setLoggedIn(login);
		const user = await fetchSessionById();
		console.log(user);
		if (user) {
			const userID = user.user_id;
			setUserID(userID);
			const currentUser: User = await fetchUserByID(userID);
			const currentUsername = currentUser.username;
			setUsername(currentUsername);
		}
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				total,
				cartQuantity,
				handleAddToCart,
				handleRemoveFromCart,
				loggedIn,
				handleLoggedIn,
				userID,
				username,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
