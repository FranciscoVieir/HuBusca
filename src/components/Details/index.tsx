import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { UserData } from '../../@types/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileDataList from '../ProfileDataItem';
import { Container } from './styles';

export function Details() {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		getUserDataFromAsyncStorage();
	}, []);

	const getUserDataFromAsyncStorage = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('@user_data');
			if (jsonValue !== null) {
				const userData = JSON.parse(jsonValue);
				setUserData(userData);
			}
		} catch (error) {
			console.error('Error fetching user data from AsyncStorage:', error);
		}
	};

	return (
		<Container>
			{userData ? (
				<ProfileDataList userData={userData} />
			) : (
				<ActivityIndicator size="large" color="#fff" />
			)}
		</Container>
	);
}
