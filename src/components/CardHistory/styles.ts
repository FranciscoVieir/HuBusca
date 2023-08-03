import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: black;
`;

export const ProfileBox = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
`;

export const ProfileText = styled.Text`
	color: black;
`;

export const ImageContainer = styled.Image`
	height: 60px;
	width: 60px;
	border-radius: 30px;
	margin-right: 16px;
`;
