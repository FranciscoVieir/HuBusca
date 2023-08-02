import { FlatList, View } from 'react-native';
import {
	RepoDate,
	RepoDescription,
	RepoItem,
	RepoLanguage,
	RepoName,
	RepoTitle,
} from './styles';
import { formatDate } from '../../DateFormatter';

function RepositoryList({ reposData }) {
	return (
		<View>
			<RepoTitle>Repositórios:</RepoTitle>

			<FlatList
				data={reposData}
				style={{ height: 300 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<RepoItem>
						<RepoName>{item.name}</RepoName>
						<RepoLanguage>Linguagem: {item.language}</RepoLanguage>
						<RepoDescription>Descrição: {item.description}</RepoDescription>
						<RepoDate>Data de Criação: {formatDate(item.created_at)}</RepoDate>
						<RepoDate>
							Data do Último Push: {formatDate(item.pushed_at)}
						</RepoDate>
					</RepoItem>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

export default RepositoryList;
