import User from '../dataTypes/user';

const requestUrl = import.meta.env.VITE_REQUEST_URL;

export async function fetchUserByID(id: number) {
	const response = await fetch(`${requestUrl}/user/${id}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data as User;
}
