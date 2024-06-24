import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../../ShoppingCartContext';
import LogoutButton from '../LogoutButton/LogoutButton';

import './NavBar.css';

function NavBar() {
	const navigate = useNavigate();
	const { loggedIn, username } = useCart();

	function goToShoppingCart() {
		navigate('/shopping-cart');
	}

	function goToLogIn() {
		navigate('/login');
	}

	function goToSignUp() {
		navigate('/signup');
	}

	// A stretch goal to add list of user's orders
	// function goToOrders() {
	// 	navigate('/orders');
	// }

	return (
		<nav className='nav-container'>
			<div className='nav-left'>
				<Link className='company-name' to='/'>
					Ganoush
				</Link>
			</div>
			<div className='nav-right'>
				{loggedIn ? (
					<>
						<Button
							buttonText={username + "'s Account"}
							buttonClick={() => navigate('/')}
							size='small'
						/>

						<LogoutButton />
					</>
				) : (
					<>
						<Button
							buttonText='Log In'
							buttonClick={() => goToLogIn()}
							size='small'
						/>
						<Button
							buttonText='Sign Up'
							buttonClick={() => goToSignUp()}
							size='small'
						/>
					</>
				)}
				<Button
					buttonText='Cart'
					buttonClick={() => goToShoppingCart()}
					icon={<IoCartOutline />}
					size='small'
					cartButton={true}
				/>
			</div>
		</nav>
	);
}

export default NavBar;
