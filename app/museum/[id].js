import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import {
  Introduction, Regulations, Fees, History, Visits, Location, ScreenHeaderBtn
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

      case "Vị trí":
        return (
          <Location />
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
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension='60%'
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
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
