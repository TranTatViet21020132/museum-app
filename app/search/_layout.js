import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from './search';
import SearchDetails from './[id]';

const Stack = createStackNavigator();

const SearchScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null
      }}
       name="search" component={SearchBar}/>
       <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null
      }}
       name="[id]" component={SearchDetails}/>
    </Stack.Navigator>
  )
}

export default SearchScreen;