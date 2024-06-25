export async function fetchSessionById() {
	const response = await fetch(`http://localhost:3000/session`, {
		credentials: 'include',
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		const data = await response.json();
		return data;
	}
}
