import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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

const ProfileDataList = ({ userData }: { userData: UserData }) => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

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
			</ProfileDataItemContainer>
		</View>
	);
};

export default ProfileDataList;
