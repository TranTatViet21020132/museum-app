
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';
import UserInfor from "./userInfor"
import Favourite from "./favourite";
const Stack = createStackNavigator()

const User = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false
        }}
        name="UserInfor" component={UserInfor} />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false
        }}
        name="favourite" component={Favourite} />
    </Stack.Navigator>
  )
}

export default User;