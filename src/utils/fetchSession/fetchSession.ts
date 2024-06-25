export async function fetchSessionById() {
	const response = await fetch(`http://localhost:3000/session`, {
		credentials: 'include',
	});
	console.log('Response Status:', response.status);
	console.log('Response Headers:', response.headers);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		console.log(response);
		const data = await response.json();
		console.log(data);
		return data;
	}
}
