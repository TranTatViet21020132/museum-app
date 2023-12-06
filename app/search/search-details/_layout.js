import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SearchDetail from './[id]';

import AudioPlayerScreen from './audio/[id]'; // Import the AudioPlayerScreen component

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
        name="[id]"
        component={SearchDetail}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
        name="audio/[id]"
        component={AudioPlayerScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
