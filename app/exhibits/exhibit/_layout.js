import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitLinks from './[id]';

import AudioPlayerScreen from './audio/[id]'; // Import the AudioPlayerScreen component

const Stack = createStackNavigator();

const ExhibitStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",

        }}
        name="[id]"
        component={ExhibitLinks}
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

export default ExhibitStack;
