import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Details } from '../components/Details';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="details" component={Profile} />
		</Navigator>
	);
}
