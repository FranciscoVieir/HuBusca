import axios from 'axios';

type Username = {
	userName: String;
};

export function getAllUsers(userName: Username) {
	// alterar para typescriot
	const users = axios.get(`https://api.github.com/users/${userName}`);

	return users;
}
