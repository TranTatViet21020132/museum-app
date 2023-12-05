import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainSearchScreen from './home';
import SearchList from './[id]';
import SearchDetails from './search-details/_layout';

const Stack = createStackNavigator();

const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }}
      
       name="search-bar" component={MainSearchScreen}/>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
      }}
       name="[id]" component={SearchList}/>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false
      }}
       name="search-details" component={SearchDetails}/>
    </Stack.Navigator>
  )
}

export default SearchScreen;