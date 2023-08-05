import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../../src/@types/interfaces';

export async function saveUserDataHistory(user: UserData) {
	try {
		const json = JSON.stringify(user);
		await AsyncStorage.setItem('@user_data', json);
	} catch (error) {
		Alert.alert('Erro', 'Falha ao armazenar as informações');
	}
}

export async function saveUserHistory(user: UserData) {
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
}
