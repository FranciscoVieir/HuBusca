// HistoryList.tsx
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../../@types/interfaces';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonContainer, ButtonText, Container } from './styles';
import { CardHistory } from '../CardHistory';
import { StackNavigationProp } from '@react-navigation/stack';
import { HistoryDetails } from '../HistoryDetails';

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
		console.log('User selected:', userData);
	};

	return (
		<Container>
			<ButtonContainer>
				<Button onPress={() => navigation.goBack()}>
					<ButtonText>Voltar</ButtonText>
				</Button>
				<Button onPress={handleClearHistory}>
					<ButtonText>Limpar Histórico</ButtonText>
				</Button>
			</ButtonContainer>
			<FlatList
				data={userHistory}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<CardHistory item={item} onPress={handleCardPress} />
				)}
				contentContainerStyle={{ alignItems: 'stretch', paddingVertical: 16 }}
			/>
			{selectedUser && <HistoryDetails userData={selectedUser} />}
		</Container>
	);
}
