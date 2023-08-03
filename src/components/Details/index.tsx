import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProfileDataList from '../ProfileDataItem';

export function Details() {
	const [userData, setUserData] = useState();

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
		<>
			{userData ? (
				<ProfileDataList userData={userData} />
			) : (
				<ActivityIndicator size="large" color="#fff" />
			)}
		</>
	);
}
