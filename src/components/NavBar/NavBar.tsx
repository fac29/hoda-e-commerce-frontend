import { useNavigate, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { IoCartOutline } from 'react-icons/io5';
import LogoutButton from '../LogoutButton/LogoutButton';
// import { fetchSessionById } from '../../utils/fetchSession/fetchSession';
// import { fetchUserByID } from '../../utils/fetchUser/fetchUser';
// import type User from '../../utils/dataTypes/user';
import { useCart } from '../../ShoppingCartContext';
import './NavBar.css';

function NavBar() {
	const navigate = useNavigate();
	const { loggedIn, username } = useCart();
	// const [loggedIn, setLoggedIn] = useState(false);
	// const [username, setUsername] = useState('');
	// // const [userId, setUserId] = useState(0);
	// const [session, setSession] = useState({});

	// useEffect(() => {
	// 	async function handleLoggedIn() {
	// 		const newSession = await fetchSessionById();
	// 		setSession(newSession);
	// 		console.log(session);
	// 		if (session) {
	// 			setLoggedIn(true);
	// 			const userID = session.user_id;
	// 			const currentUser: User = await fetchUserByID(userID);
	// 			const currentUsername = currentUser.username;
	// 			setUsername(currentUsername);
	// 		} else {
	// 			setLoggedIn(false);
	// 		}
	// 	}

	// 	handleLoggedIn();
	// }, [session]);

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
