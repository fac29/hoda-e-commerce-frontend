import './LogoutButton.css';
import Button from '../Button/Button';

function LogoutButton() {
	async function handleLogout() {
		try {
			const response = await fetch('http://localhost:3000/logout', {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				const data = await response.json();
				console.log('Logout successful:', data);
				alert('You have been logged out successfully!');
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
