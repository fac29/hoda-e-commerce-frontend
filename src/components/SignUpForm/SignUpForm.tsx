import { useState, FormEvent } from 'react';
import './SignUpForm.css';
import Button from '../Button/Button';

function SignUpForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSignUp(event: FormEvent) {
		event.preventDefault();
		const response = await fetch('http://localhost:3000/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		});

		if (response.ok) {
			const data = await response.json();
			// Test log to see the response after sign up attempt
			console.log('Sign up successful:', data);
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
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
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
			<Button buttonText='Sign Up' size='medium'></Button>
			<a className='formLink' href='/login'>
				I have an account already. Take me to login.
			</a>
		</form>
	);
}

export default SignUpForm;
