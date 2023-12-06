import { Stack, useSearchParams } from "expo-router";
import {
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import {
  Introduction, Regulations, Fees, History, Visits, ScreenHeaderBtn
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";

const MuseumInfo = () => {
  const params = useSearchParams();

  const displayTabContent = () => {
    switch (params.id) {
      case "Giới thiệu":
        return (
          <Introduction />
        );

      case "Lịch sử bảo tàng":
        return (
          <History />
        );

      case "Tham quan":
        return (
          <Visits />
        );

      case "Nội quy":
        return (
          <Regulations />
        );

      case "Lệ phí":
        return (
          <Fees />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={{ flexDirection: 'row', marginLeft: 12 }}>
                <ScreenHeaderBtn iconUrl={icons.menu} dimension='80%' />
              </View>
            ),
          }}
        />

      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            {displayTabContent()}
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default MuseumInfo;
