import React, { useState, FormEvent } from 'react';
import './LoginForm.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../ShoppingCartContext';
import {
	validateEmail,
	validatePassword,
} from '../../utils/validation/validationRules';

const requestUrl = import.meta.env.VITE_REQUEST_URL;

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<{ email?: string; password?: string }>(
		{}
	);

	const navigate = useNavigate();
	const { handleLoggedIn } = useCart();

	const validateForm = () => {
		const newErrors: { email?: string; password?: string } = {};
		if (!validateEmail(email)) {
			newErrors.email = 'Please enter a valid email address.';
		}
		if (!validatePassword(password)) {
			newErrors.password = 'Password must be at least 8 characters long.';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleLogin = async (event: FormEvent) => {
		event.preventDefault();

		if (validateForm()) {
			const response = await fetch(`${requestUrl}/login`, {
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
	};

	return (
		<form onSubmit={handleLogin} className='form'>
			<div className='formField'>
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
				<div className='errorMsg' >{errors.email && <span className='error'>{errors.email}</span>}</div>
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
	<div className='errorMsg' >{errors.email && <span className='error'>{errors.email}</span>}</div>
			</div>
			<Button buttonText='Login' size='medium'></Button>
			<a className='formLink' href='/signup'>
				I don't have an account yet. Take me to sign up page.
			</a>
		</form>
	);
}

export default LoginForm;
