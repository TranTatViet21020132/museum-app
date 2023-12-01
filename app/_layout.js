import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../app/main/_layout'
import LoginScreen from '../app/login/log'
import Register from '../app/register/_layout';
import User from "./user/_layout"
import Welcome from './welcome/_layout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName='login'>
      
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
      }} name="login" component={LoginScreen}/>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }} name="register" component={Register} />
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }} name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default App;
