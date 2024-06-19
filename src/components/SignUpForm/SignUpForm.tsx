import { useState } from 'react';
import './SignUpForm.css';
import Button from '../Button/Button';

function SignUpForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form action='submit' className='form'>
			<div className='formField'>
				<label className='formLabel' htmlFor='username'>
					Username
				</label>
				<input
					className='formInput'
					type='text'
					name='username'
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
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button
				buttonText='Sign Up'
				buttonClick={() => handleSignUp()}
				size='medium'
			></Button>
			<a className='formLink' href='/login'>
				I have an account already. Take me to login.
			</a>
		</form>
	);
}

export default SignUpForm;
