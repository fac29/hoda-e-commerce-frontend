import './LogoutButton.css';
import Button from '../Button/Button';
import { useCart } from '../../ShoppingCartContext';


const requestUrl = import.meta.env.VITE_REQUEST_URL;

function LogoutButton() {
	const { handleLoggedIn } = useCart();

	async function handleLogout() {
		try {
			const response = await fetch(`${requestUrl}/logout`, {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Logout successful:', data);
				alert('You have been logged out successfully!');
				handleLoggedIn(false);
			} else {
				const errorData = await response.json();
				console.error('Logout failed:', errorData);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	}

	return (
		<Button
			buttonText='Logout'
			size='small'
			buttonClick={() => handleLogout()}
		></Button>
	);
}

export default LogoutButton;
