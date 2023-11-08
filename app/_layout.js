import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../app/main/_layout'
import LoginScreen from '../app/user/_layout'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }} name="main" component={MainScreen}/>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }} name="user" component={LoginScreen}/>
    </Stack.Navigator>
  );
};

export default App;
