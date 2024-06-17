import { useCart } from "../../ShoppingCartContext";
import "./Button.css";

type buttonProps = {
  buttonText: string;
  buttonClick?: () => void;
  icon?: React.ReactNode;
  size: "small" | "medium" | "large";
};

function Button({ buttonText, buttonClick, icon, size }: buttonProps) {
  const { cartQuantity } = useCart();

  return (
    <button onClick={buttonClick} className={size}>
      <span>{cartQuantity === 0 ? "" : cartQuantity} </span>
      {icon && <span>{icon}</span>}
      <span> {buttonText}</span>
    </button>
  );
}

export default Button;
