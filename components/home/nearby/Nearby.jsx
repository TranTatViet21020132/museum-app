import React from "react";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from "./nearby.style";
import { COLORS, SIZES } from "../../../constants";
import NearbyCard from "../../common/cards/nearby/NearbyCard";
import useFetch from "../../../hook/useFetch";

const Nearby = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('featured');

  const [selectedExhibit, setSelectedExhibit] = useState();

  const handleCardPress = (item) => {
    router.push(`/exhibits/exhibit/${item.titleParam}`);
    console.log(item.titleParam);
    setSelectedExhibit(item.titleParam);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Newest</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.text}>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NearbyCard
                item={item}
                selectedExhibit={selectedExhibit}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.titleParam}
            contentContainerStyle={{ columnGap: SIZES.xSmall }}
            horizontal
          />
        )}
      </View>
    </View>
  )
};

export default Nearby;
