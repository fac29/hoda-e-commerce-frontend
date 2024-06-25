import { useState, FormEvent } from 'react';
import './SignUpForm.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<{
		username?: string;
		email?: string;
		password?: string;
	}>({});
	const navigate = useNavigate();

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePassword = (password: string) => {
		return password.length >= 8;
	};

	const validateUsername = (username: string) => {
		return username.trim() !== '';
	};

	const validateForm = () => {
		const newErrors: { username?: string; email?: string; password?: string } =
			{};
		if (!validateUsername(username)) {
			newErrors.username = 'Username cannot be empty.';
		}
		if (!validateEmail(email)) {
			newErrors.email = 'Please enter a valid email address.';
		}
		if (!validatePassword(password)) {
			newErrors.password = 'Password must be at least 8 characters long.';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	async function handleSignUp(event: FormEvent) {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		const response = await fetch('http://localhost:3000/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
			credentials: 'include',
		});

		if (response.ok) {
			const data = await response.json();
			// Test log to see the response after sign up attempt
			console.log('Sign up successful:', data);
			navigate('/');
		} else {
			const errorData = await response.json();
			// Test log to see the response after sign up attempt
			console.error('Sign up failed:', errorData);
		}
	}

	return (
		<form onSubmit={handleSignUp} className='form'>
			<div className='formField'>
				<label className='formLabel' htmlFor='username'>
					Username
				</label>
				<input
					className='formInput'
					type='text'
					name='username'
					id='username'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				{errors.username && <span className='error'>{errors.username}</span>}
			</div>
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
				{errors.email && <span className='error'>{errors.email}</span>}
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
				{errors.password && <span className='error'>{errors.password}</span>}
			</div>
			<Button buttonText='Sign Up' size='medium'></Button>
			<a className='formLink' href='/login'>
				I have an account already. Take me to login.
			</a>
		</form>
	);
}

export default SignUpForm;
