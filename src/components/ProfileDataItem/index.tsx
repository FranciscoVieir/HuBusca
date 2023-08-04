import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Avatar,
	DataContainer,
	ProfileDataItemContainer,
	ProfileText,
	BackContainer,
	HistoryButton,
	HistoryButtonText,
	ButtonContainer,
} from './styles';

import RepositoryList from '../RepositoryList';
import { UserData } from '../../@types/interfaces';
import { Loading } from '../Loading';

type RootStackParamList = {
	History: undefined;
	historylist: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'History'
>;

function ProfileDataList({ userData }: { userData: UserData }) {
	const navigation = useNavigation<HomeScreenNavigationProp>();
	const [reposData, setReposData] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleGoBack = () => {
		navigation.goBack();
	};

	const handleViewHistory = () => {
		navigation.navigate('historylist');
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
		return <Loading />;
	}

	return (
		<View>
			<View>
				<ButtonContainer>
					<BackContainer onPress={handleGoBack}>
						<Icon name="chevron-left" size={20} color="white" />
					</BackContainer>
					<HistoryButton onPress={handleViewHistory}>
						<HistoryButtonText>Ver histórico</HistoryButtonText>
					</HistoryButton>
				</ButtonContainer>
				<ProfileDataItemContainer>
					<Avatar source={{ uri: userData.avatar_url }} />
					<DataContainer>
						<ProfileText>Nome: {userData.name}</ProfileText>
						<ProfileText>Login: {userData.login}</ProfileText>
						<ProfileText>Localização: {userData.location}</ProfileText>
						<ProfileText>ID: {userData.id}</ProfileText>
						<ProfileText>Seguidores: {userData.followers}</ProfileText>
						<ProfileText>
							Repositório público: {userData.public_repos}
						</ProfileText>
					</DataContainer>
					<RepositoryList reposData={reposData} />
				</ProfileDataItemContainer>
			</View>
		</View>
	);
}

export default ProfileDataList;
