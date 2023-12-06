import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";

import { COLORS, icons, SIZES } from "../../constants";
import {
  ScreenHeaderBtn
} from "../../components";

import SearchBar from '../../components/search/Search'

const MainSearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
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
          <SearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default MainSearchScreen;
