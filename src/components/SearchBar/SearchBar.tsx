import { useState } from 'react';
import './SearchBar.css';
import Button from '../Button/Button';

function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');

	function handleSearch() {
		onSearch(searchTerm);
	}

	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='what are you looking for?'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<Button
				buttonText='Search'
				buttonClick={() => handleSearch()}
				size='small'
			/>
		</div>
	);
}

export default SearchBar;
