import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../search/_layout';
import HomeScreen from '../main/home';

import ExhibitScreen from '../exhibits/_layout';
import User from '../user/_layout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
      }}
      
       name="home" component={HomeScreen}/>
      
    </Stack.Navigator>
  );
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === "exhibits") {
            iconName = focused ? "copy" : "copy-outline";
          }else if (route.name === "user") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
        tabBarStyle: { backgroundColor: "#333333", display: "flex" },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false,
      }}
      
      name="home" component={HomeStack} />
      <Tab.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false,
      }}
      name="exhibits" component={ExhibitScreen} />
      <Tab.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false,
      }}
      name="search" component={SearchScreen} />
      <Tab.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
        headerShown: false,
      }}
      name="user" component={User} />
    </Tab.Navigator>
  );
};

export default Layout;
