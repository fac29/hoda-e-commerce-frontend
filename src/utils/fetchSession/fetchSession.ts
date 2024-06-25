const requestUrl = import.meta.env.VITE_REQUEST_URL;

export async function fetchSessionById() {
	const response = await fetch(`${requestUrl}/session`, {
		credentials: 'include',
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		const data = await response.json();
		return data;
	}
}
