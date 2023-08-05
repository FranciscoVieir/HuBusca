import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 8px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
