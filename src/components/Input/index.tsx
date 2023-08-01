import {
	Container,
	ContainerInput,
	ButtonText,
	ContainerButton,
} from './styles';

export function Input() {
	return (
		<Container>
			<ContainerInput placeholder="Pesquise aqui" />
			<ContainerButton
				onPress={() => {
					// Lógica
				}}
			>
				<ButtonText>Pesquisar</ButtonText>
			</ContainerButton>
		</Container>
	);
}
