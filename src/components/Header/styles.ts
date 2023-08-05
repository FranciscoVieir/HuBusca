import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 32px;
	font-weight: bold;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
