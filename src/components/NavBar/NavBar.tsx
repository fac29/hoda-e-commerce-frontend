import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { IoCartOutline } from 'react-icons/io5';

import './NavBar.css';

function NavBar() {
	const navigate = useNavigate();

	function goToShoppingCart() {
		navigate('/shopping-cart');
	}

	function goToLogIn() {
		navigate('/login');
	}

	function goToSignUp() {
		navigate('/signup');
	}

	return (
		<nav className='nav-container'>
			<div className='nav-left'>
				<Link className='company-name' to='/'>
					Ganoush
				</Link>
			</div>
			<div className='nav-right'>
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
