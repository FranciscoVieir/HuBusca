import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	Container,
	ContainerInput,
	ContainerButton,
	CardContainer,
} from './styles';

import { UserData } from '../../@types/interfaces';
import Card from '../Card';

export function Input({
	searchUsers,
	userData,
}: {
	searchUsers: (userName: string) => void;
	userData: UserData;
}) {
	const [userName, setUserName] = useState('');

	function handleSearchUsers() {
		searchUsers(userName);
		setUserName('');
	}

	return (
		<>
			<Container>
				<ContainerInput
					placeholder="Digite o nome do usuário"
					value={userName}
					onChangeText={setUserName}
				/>
				<ContainerButton onPress={handleSearchUsers}>
					<Icon name="search" size={20} color="white" />
				</ContainerButton>
			</Container>
			{userData.name !== '' && (
				<CardContainer>
					<Card userData={userData} />
				</CardContainer>
			)}
		</>
	);
}
