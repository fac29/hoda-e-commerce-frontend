export async function fetchDatafromBack(searchTerm: string) {
	const response = await fetch(
		`http://localhost:3000/products?search=${searchTerm}`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data;
}

export async function fetchProductByID(id: number) {
	const response = await fetch(`http://localhost:3000/products/?search=${id}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data;
}
