import "react-native-gesture-handler"
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import FavouriteList from "./favouriteList"
import FavouriteDetail from "./detail/[id]"
import AudioScreen from "./detail/audio/[id]"

const Stack = createStackNavigator();
const Favourite = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
                name="favourite-list"
                component={FavouriteList}
            />
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown: false
                }}
                name="detail/[id]"
                component={FavouriteDetail}
            />
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown: false
                }}
                name="audio/[id]"
                component={AudioScreen}
            />
        </Stack.Navigator>
    )
}

export default Favourite;