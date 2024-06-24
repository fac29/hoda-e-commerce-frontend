export async function fetchSessionById(id: number) {
	const response = await fetch(`http://localhost:3000/session/${id}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data;
}
