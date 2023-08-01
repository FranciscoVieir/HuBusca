import React from 'react';
import { Avatar, CardContainer, Location, Login, Name } from './styles';
import { UserData } from '../../@types/interfaces';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
	Home: undefined;
	details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Card = ({ userData }: { userData: UserData }) => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	const handleCardPress = () => {
		navigation.navigate('details');
		console.log('pppp');
	};

	return (
		<TouchableOpacity onPress={handleCardPress}>
			<CardContainer>
				<Avatar source={{ uri: userData.avatar_url }} />
				<Name>{userData.name}</Name>
				<Login>@{userData.login}</Login>
				<Location>Location: {userData.location}</Location>
			</CardContainer>
		</TouchableOpacity>
	);
};

export default Card;
