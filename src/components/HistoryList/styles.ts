import { styled } from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ProfileText = styled.Text`
	color: black;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 14px;
`;

export const Button = styled.TouchableOpacity`
	padding: 8px;
	background-color: #6912a5;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const TitleText = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: white;
	text-align: center;
	margin-top: 20px;
	padding-bottom: 10px;
`;

export const EmptyContainer = styled.View`
	justify-content: center;
	align-items: center;
`;

export const EmptyText = styled.Text`
	color: white;
	font-size: 16px;
`;
