import { User } from '../dataTypes/user';

export async function fetchUserById(id: number) {
	const response = await fetch(`http://localhost:3000/user/${id}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);
	const data = await response.json();
	return data as User;
}

// export async function fetchUserByEmail(email: string) {
// 	const response = await fetch(`http://localhost:3000/user/${email}`);

// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}

// 	console.log(response);
// 	const data = await response.json();
// 	return data as User;
// }
