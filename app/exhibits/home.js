import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../constants";
import {
  ScreenHeaderBtn
} from "../../components";

import ExhibitWelcome from '../../components/exhibits/exhibits-welcome/ExhibitWelcome'

const Exhibit = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.heart} dimension='60%' />
          ),

        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <ExhibitWelcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Exhibit;
