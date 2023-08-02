import { FlatList, Linking, TouchableOpacity, View } from 'react-native';
import {
	RepoDate,
	RepoDescription,
	RepoItem,
	RepoLanguage,
	RepoName,
	RepoTitle,
	Container,
} from './styles';
import { formatDate } from '../../DateFormatter';

function RepositoryList({ reposData }) {
	const handleRepoPress = (url: string) => {
		Linking.openURL(url);
	};

	return (
		<Container>
			<RepoTitle>Repositórios:</RepoTitle>

			<FlatList
				data={reposData}
				style={{ height: 300 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handleRepoPress(item.html_url)}>
						<RepoItem>
							<RepoName>{item.name}</RepoName>
							<RepoLanguage>Linguagem: {item.language}</RepoLanguage>
							<RepoDescription>Descrição: {item.description}</RepoDescription>
							<RepoDate>
								Data de Criação: {formatDate(item.created_at)}
							</RepoDate>
							<RepoDate>
								Data do Último Push: {formatDate(item.pushed_at)}
							</RepoDate>
						</RepoItem>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</Container>
	);
}

export default RepositoryList;
