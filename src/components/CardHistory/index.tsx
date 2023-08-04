import { TouchableOpacity, View } from 'react-native';
import { UserData } from '../../@types/interfaces';
import { ImageContainer, ProfileBox, ProfileText } from './styles';

type UserItemProps = {
	item: UserData;
	onPress: (userData: UserData) => void;
};

export function CardHistory({ item, onPress }: UserItemProps) {
	return (
		<ProfileBox>
			<TouchableOpacity onPress={() => onPress(item)}>
				<ImageContainer source={{ uri: item.avatar_url }} />
			</TouchableOpacity>
			<View>
				<ProfileText>Nome: {item.name}</ProfileText>
				<ProfileText>Login: {item.login}</ProfileText>
				<ProfileText>Localização: {item.location}</ProfileText>
			</View>
		</ProfileBox>
	);
}
