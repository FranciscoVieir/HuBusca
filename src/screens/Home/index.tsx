import { useState } from 'react';
import { Container } from './styles';
import { Input } from '../../components/Input';
import Header from '../../components/Header';
import { Alert } from 'react-native';
import { UserData } from '../../@types/interfaces';

import {
	saveUserDataHistory,
	saveUserHistory,
} from '../../Utils/AsyncStorageUtils';

import apiGithub from '../../services/api';

export function Home() {
	const [userData, setUserData] = useState<UserData>({
		name: '',
		avatar_url: '',
		login: '',
		location: '',
		id: 0,
		followers: 0,
		public_repos: 0,
		repos_url: '',
	});

	const searchUsers = async (userName: string) => {
		try {
			const response = await apiGithub.get(`/users/${userName}`);

			const newUser = {
				name: response.data.name,
				avatar_url: response.data.avatar_url,
				login: response.data.login,
				location: response.data.location,
				id: response.data.id,
				followers: response.data.followers,
				public_repos: response.data.public_repos,
				repos_url: response.data.repos_url,
			};

			setUserData(newUser);
			saveUserDataHistory(newUser);
			saveUserHistory(newUser);
		} catch (error) {
			setUserData({
				name: '',
				avatar_url: '',
				login: '',
				location: '',
				id: 0,
				followers: 0,
				public_repos: 0,
				repos_url: '',
			});
			Alert.alert('Tente novamente', 'Usuário não existe!');
		}
	};

	return (
		<Container>
			<Header />
			<Input searchUsers={searchUsers} userData={userData} />
		</Container>
	);
}
