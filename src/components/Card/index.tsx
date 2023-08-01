import React from 'react';
import { Avatar, CardContainer, Location, Login, Name } from './styles';
import { UserData } from '../../@types/interfaces';

const Card = ({ userData }: { userData: UserData }) => {
	return (
		<CardContainer>
			<Avatar source={{ uri: userData.avatar_url }} />
			<Name>{userData.name}</Name>
			<Login>@:{userData.login}</Login>
			<Location>Location: {userData.location}</Location>
		</CardContainer>
	);
};

export default Card;
