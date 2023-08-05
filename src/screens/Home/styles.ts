import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 24px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
