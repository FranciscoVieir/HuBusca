import { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Container,
	ContainerInput,
	ButtonText,
	ContainerButton,
	CardContainer,
} from './styles';

import { UserData } from '../../@types/interfaces';
import apiGithub from '../../services/api';
import Card from '../Card';

export function Input() {
	const [userName, setUserName] = useState('');
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

	const searchUsers = async () => {
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
			setUserName('');
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

	const saveUserDataHistory = async (user: UserData) => {
		try {
			const json = JSON.stringify(user);
			await AsyncStorage.setItem('@user_data', json);
		} catch (error) {
			Alert.alert('Erro', 'Falha ao armazenar as informações');
		}
	};

	const saveUserHistory = async (user: UserData) => {
		try {
			const jsonValue = await AsyncStorage.getItem('@user_data_history');
			let userHistory = jsonValue ? JSON.parse(jsonValue) : [];

			const existingUser = userHistory.find((u: UserData) => u.id === user.id);

			if (!existingUser) {
				userHistory = [...userHistory, user];
				const json = JSON.stringify(userHistory);
				await AsyncStorage.setItem('@user_data_history', json);
			}
		} catch (error) {
			Alert.alert('Erro', 'Falha ao armazenar o histórico de usuários');
		}
	};

	return (
		<>
			<Container>
				<ContainerInput
					placeholder="Digite o nome do usuário"
					value={userName}
					onChangeText={setUserName}
				/>
				<ContainerButton onPress={searchUsers}>
					<Icon name="search" size={20} color="white" />
				</ContainerButton>
			</Container>
			{userData.name === '' ? (
				''
			) : (
				<CardContainer>
					<Card userData={userData} />
				</CardContainer>
			)}
		</>
	);
}
