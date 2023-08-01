import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 30px;
`;

export const ContainerInput = styled(TextInput)`
	flex: 1;
	padding: 6px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	margin-right: 8px;
	background-color: white;
`;

export const ContainerButton = styled.TouchableOpacity`
	background-color: #6912a5;
	padding: 6px;
	border-radius: 5px;
`;

export const ButtonText = styled.Text`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
