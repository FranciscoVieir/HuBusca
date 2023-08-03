import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { History } from '../screens/History';
import { HistoryList } from '../components/HistoryList';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="details" component={Profile} />
			<Screen name="historylist" component={History} />
			<Screen name="historydetails" component={HistoryList} />
		</Navigator>
	);
}
