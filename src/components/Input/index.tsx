import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
			await AsyncStorage.setItem(`@user_${userData.login}`, json);
		} catch (error) {
			Alert.alert('Falha', 'Falha ao armazenar as informações');
		}
	};

	// remover depois que finalizar o componente
	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return (
		<>
			<Container>
				<ContainerInput
					placeholder="Digite o nome do usuário"
					value={userName}
					onChangeText={setUserName}
				/>
				<ContainerButton onPress={searchUsers}>
					<ButtonText>Pesquisar</ButtonText>
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
