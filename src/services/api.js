import axios from 'axios';

export function getAllUsers(userName) {
	const users = axios.get(`https://api.github.com/users/${userName}`);

	return users;
}
