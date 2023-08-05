import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { History } from '../screens/History';
import { HistoryList } from '../components/HistoryList';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	const { COLORS } = useTheme();

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="home" component={Home} />
				<Screen name="details" component={Profile} />
				<Screen name="historylist" component={History} />
				<Screen name="historydetails" component={HistoryList} />
			</Navigator>
		</View>
	);
}
