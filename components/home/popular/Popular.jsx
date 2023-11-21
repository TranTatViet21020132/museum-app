import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from "react";

import styles from './popular.style'
import { COLORS, SIZES } from '../../../constants';
import PopularCard from '../../common/cards/popular/PopularCard'
import useFetch from '../../../hook/useFetch';

const Popular = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('popular');

  const [selectedExhibit, setSelectedExhibit] = useState();

  const handleCardPress = (item) => {
    router.push(`/exhibits/exhibit/${item.titleParam}`);
    console.log(item.titleParam);
    setSelectedExhibit(item.titleParam);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular</Text>
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
            data={data?.data}
            renderItem={({ item }) => (
              <PopularCard
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
}

export default Popular;