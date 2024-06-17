import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  total?: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  cartQuantity?: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
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
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
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
    const existingItem = cart.find((cartItem) => cartItem.id === id);

    if (existingItem && existingItem.quantity > 1) {
      // If the item exists and its quantity is greater than 1, decrease its quantity by 1
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      // If the item does not exist or its quantity is 1, remove it from the cart
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
