import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Button,
	ButtonContainer,
	Container,
	EmptyContainer,
	EmptyText,
	TitleText,
} from './styles';
import { CardHistory } from '../CardHistory';
import { HistoryDetails } from '../HistoryDetails';
import { UserData } from '../../@types/interfaces';

type RootStackParamList = {
	Home: undefined;
	historydetails: { userData: UserData };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function HistoryList() {
	const [userHistory, setUserHistory] = useState<UserData[]>([]);
	const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
	const navigation = useNavigation<HomeScreenNavigationProp>();

	useEffect(() => {
		getUserDataHistory();
	}, []);

	const getUserDataHistory = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('@user_data_history');
			if (jsonValue !== null) {
				const userDataHistory = JSON.parse(jsonValue);
				setUserHistory(userDataHistory);
			}
		} catch (error) {
			console.error(
				'Error fetching user data history from AsyncStorage:',
				error
			);
		}
	};

	const handleClearHistory = async () => {
		try {
			await AsyncStorage.removeItem('@user_data_history');
			setUserHistory([]);
		} catch (error) {
			console.error(
				'Error clearing user data history from AsyncStorage:',
				error
			);
		}
	};

	const handleCardPress = (userData: UserData) => {
		setSelectedUser(userData);
	};

	return (
		<>
			<Container>
				<ButtonContainer>
					<Button onPress={() => navigation.goBack()}>
						<Icon name="chevron-left" size={20} color="white" />
					</Button>
					<Button onPress={handleClearHistory}>
						<Icon name="trash-o" size={21} color="white" />
					</Button>
				</ButtonContainer>

				<TitleText>Histórico</TitleText>

				<FlatList
					data={userHistory}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<CardHistory item={item} onPress={handleCardPress} />
					)}
					contentContainerStyle={{ alignItems: 'stretch', paddingVertical: 16 }}
					ListEmptyComponent={() => (
						<EmptyContainer>
							<EmptyText>Lista está vazia</EmptyText>
						</EmptyContainer>
					)}
				/>
			</Container>
			{selectedUser && <HistoryDetails userData={selectedUser} />}
		</>
	);
}
