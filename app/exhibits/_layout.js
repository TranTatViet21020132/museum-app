import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitMain from './home';
import ExhibitStack from './exhibit/_layout';

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
          headerShown: false
        }}
        name="exhibit" component={ExhibitStack} />
    </Stack.Navigator>
  );
};

export default ExhibitScreen;
