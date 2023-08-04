import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RepositoryList from '../RepositoryList';
import { UserData } from '../../@types/interfaces';

import {
	Avatar,
	DataContainer,
	ProfileDataItemContainer,
	ProfileText,
	BackContainer,
	ButtonContainer,
	Container,
} from './styles';

type RootStackParamList = {
	Home: undefined;
	home: { userData: UserData };
};

type ProfileDataListNavigationProp = StackNavigationProp<
	RootStackParamList,
	'home'
>;

type ProfileDataListProps = {
	userData: UserData;
};

export function HistoryDetails({ userData }: ProfileDataListProps) {
	const navigation = useNavigation<ProfileDataListNavigationProp>();
	const [reposData, setReposData] = useState([]);

	const handleGoBack = () => {
		navigation.navigate('home');
	};

	useEffect(() => {
		const fetchReposData = async () => {
			try {
				const response = await axios.get(userData.repos_url);
				setReposData(response.data);
			} catch (error) {
				console.error('Erro ao obter dados dos repositórios:', error);
			}
		};

		fetchReposData();
	}, [userData.repos_url]);

	return (
		<Container>
			<ProfileDataItemContainer>
				<ButtonContainer>
					<BackContainer onPress={handleGoBack}>
						<Icon name="home" size={20} color="white" />
					</BackContainer>
				</ButtonContainer>
				<Avatar source={{ uri: userData.avatar_url }} />
				<DataContainer>
					<ProfileText>Name: {userData.name}</ProfileText>
					<ProfileText>Login: {userData.login}</ProfileText>
					<ProfileText>Location: {userData.location}</ProfileText>
					<ProfileText>ID: {userData.id}</ProfileText>
					<ProfileText>Followers: {userData.followers}</ProfileText>
					<ProfileText>Public Repos: {userData.public_repos}</ProfileText>
				</DataContainer>
				<RepositoryList reposData={reposData} />
			</ProfileDataItemContainer>
		</Container>
	);
}
