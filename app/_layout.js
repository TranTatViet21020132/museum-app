import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../app/main/_layout'
import LoginScreen from '../app/login/_layout'
import Register from '../app/register/_layout';
import Welcome from './welcome/_layout';

const Stack = createStackNavigator();

const App = () => {
      return (
            <Stack.Navigator initialRouteName='welcome'>

                  <Stack.Screen options={{
                        headerShadowVisible: false,
                        headerTitle: "",
                        href: null,
                        headerShown: false
                  }} name="main" component={MainScreen} />
                  <Stack.Screen options={{
                        headerShadowVisible: false,
                        headerTitle: "",
                        href: null,
                        headerShown: false
                  }} name="login" component={LoginScreen} />
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
