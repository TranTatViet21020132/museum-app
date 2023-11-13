import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../app/main/_layout'
import LoginScreen from './login/Login'
import Log from "../app/login/log"
import RegisterScreen from "../app/register/Register"

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
      }} name="login" component={Log}/>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }} name="register" component={RegisterScreen}/>
    </Stack.Navigator>
  );
};

export default App;
