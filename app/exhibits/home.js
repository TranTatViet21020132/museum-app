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
              <View style={{ flexDirection: 'row', marginLeft: 24 }}>
                <ScreenHeaderBtn iconUrl={icons.menu} dimension='80%' />
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
              </View>
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
