import styled from 'styled-components/native';

export const ProfileDataItemContainer = styled.View`
	background-color: #f5f5f5;
	border-radius: 8px;
	margin: 16px;
	padding: 16px;
	/* flex: 1; */
`;

export const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 32px;
	align-self: center;
	margin-bottom: 16px;
`;

export const DataContainer = styled.View`
	border: 2px solid #6912a5;
	padding: 16px;
	border-radius: 8px;
`;

export const ProfileText = styled.Text`
	font-size: 16px;
	margin-bottom: 4px;
	color: black;
`;

export const BackContainer = styled.TouchableOpacity`
	padding: 8px;
	width: 60px;
	background-color: #6912a5;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const BackButton = styled.Text`
	color: #fff;
	font-weight: bold;
`;

export const HistoryButton = styled.TouchableOpacity`
	padding: 8px;
	width: 120px;
	background-color: #6912a5;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const HistoryButtonText = styled.Text`
	color: #fff;
	font-weight: bold;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
