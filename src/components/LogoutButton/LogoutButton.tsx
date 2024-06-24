import './LogoutButton.css';
import Button from '../Button/Button';

function LogoutButton() {
	async function handleLogout() {
		try {
			const response = await fetch('http://localhost:3000/logout', {
				method: 'POST',
				credentials: 'include', // Include credentials (cookies) with the request
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Logout successful:', data);
				// Perform any additional logout logic, such as redirecting the user
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
