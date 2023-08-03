import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { UserData } from '../../@types/interfaces';
import { ImageContainer, ProfileBox, ProfileText } from './styles';

type UserItemProps = {
	item: UserData;
	onPress: (userData: UserData) => void;
};

export function CardHistory({ item, onPress }: UserItemProps) {
	return (
		<TouchableOpacity onPress={() => onPress(item)}>
			<ProfileBox>
				<ImageContainer source={{ uri: item.avatar_url }} />
				<View>
					<ProfileText>Name: {item.name}</ProfileText>
					<ProfileText>Login: {item.login}</ProfileText>
					<ProfileText>Location: {item.location}</ProfileText>
				</View>
			</ProfileBox>
		</TouchableOpacity>
	);
}
