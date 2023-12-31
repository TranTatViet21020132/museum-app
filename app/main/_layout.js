import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../search/_layout';
import HomeScreen from './home';
import MuseumInfoScreen from '../museum/[id]'

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
          unmountOnBlur: true,
        }}

        name="home-screen" component={HomeScreen} />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          unmountOnBlur: true,
        }}

        name="museum/[id]" component={MuseumInfoScreen} />
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
          if (route.name === 'home' || route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'search' || route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === "exhibits" || route.name === "Exhibits") {
            iconName = focused ? "copy" : "copy-outline";
          } else if (route.name === "user" || route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          { backgroundColor: "#333333", display: "flex" },
          null
        ]
      })}
    >
      <Tab.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false,
          tabBarLabel: 'Home',
        }}

        name="home" component={HomeStack} />
      <Tab.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false,
          tabBarLabel: "Exhibits"
        }}
        name="exhibits" component={ExhibitScreen} />
      <Tab.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false,
          tabBarLabel: 'Search',
        }}
        name="search" component={SearchScreen} />
      <Tab.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          href: null,
          headerShown: false,
          tabBarLabel: 'User',
        }}
        name="user" component={User} />
    </Tab.Navigator>
  );
};

export default Layout;
