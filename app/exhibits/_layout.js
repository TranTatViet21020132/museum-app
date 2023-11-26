import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitMain from './home';
import ExhibitLinks from './[id]';

const Stack = createStackNavigator();

const ExhibitScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
        }}

        name="trung-bay-thuong-xuyen-p1" component={ExhibitMain} />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,

        }}
        name="[id]" component={ExhibitLinks} />
    </Stack.Navigator>
  )
}

export default ExhibitScreen;