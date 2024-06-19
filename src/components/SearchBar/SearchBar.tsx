import { useState } from 'react';
import './SearchBar.css';
import Button from '../Button/Button';

function SearchBar({ onSearch }: any) {
	const [searchTerm, setSearchTerm] = useState('');

	function handleSearch() {
		onSearch(searchTerm);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}

	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='what are you looking for?'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
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
