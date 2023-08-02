import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { UserData } from '../../@types/interfaces';
import { useNavigation } from '@react-navigation/native';
import {
	Avatar,
	DataContainer,
	ProfileDataItemContainer,
	ProfileText,
	BackButton,
	BackContainer,
} from './styles';
import RepositoryList from '../RepositoryList';
import axios from 'axios';

const ProfileDataList = ({ userData }: { userData: UserData }) => {
	const navigation = useNavigation();
	const [reposData, setReposData] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleGoBack = () => {
		navigation.goBack();
	};

	useEffect(() => {
		const fetchReposData = async () => {
			try {
				const response = await axios.get(userData.repos_url);
				setReposData(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Erro ao obter dados dos repositórios:', error);
				setLoading(false);
			}
		};

		fetchReposData();
	}, [userData.repos_url]);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}

	return (
		<View>
			<BackContainer onPress={handleGoBack}>
				<BackButton>Back</BackButton>
			</BackContainer>
			<ProfileDataItemContainer>
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
		</View>
	);
};

export default ProfileDataList;
