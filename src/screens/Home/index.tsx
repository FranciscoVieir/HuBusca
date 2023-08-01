import { Text, View } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header';
import { Input } from '../../components/Input';

export function Home() {
	return (
		<Container>
			<Header />
			<Input />
		</Container>
	);
}
