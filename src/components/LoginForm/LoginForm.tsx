import { useState, FormEvent } from 'react';
import './LoginForm.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../ShoppingCartContext';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { handleLoggedIn } = useCart();

	async function handleLogin(event: FormEvent) {
		event.preventDefault();
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
			credentials: 'include',
		});

		if (response.ok) {
			const data = await response.json();
			console.log('Login successful:', data);
			handleLoggedIn(true);
			navigate('/');
		} else {
			const errorData = await response.json();
			console.error('Login failed:', errorData);
		}
	}

	return (
		<form onSubmit={handleLogin} className='form'>
			<div className='formField'>
				{' '}
				<label className='formLabel' htmlFor='email'>
					Email Address
				</label>
				<input
					className='formInput'
					type='email'
					name='email'
					id='email'
					placeholder='Email Address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='formField'>
				<label className='formLabel' htmlFor='password'>
					Password
				</label>
				<input
					className='formInput'
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button buttonText='Login' size='medium'></Button>
			<a className='formLink' href='/signup'>
				I don't have an account yet. Take me to sign up page.
			</a>
		</form>
	);
}

export default LoginForm;
