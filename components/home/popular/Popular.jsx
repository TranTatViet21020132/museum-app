import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from "react";

import styles from './popular.style'
import { COLORS, SIZES } from '../../../constants';
import PopularCard from '../../common/cards/popular/PopularCard'
import useFetch from '../../../hook/useFetch';
import axios from 'axios';

const Popular = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('popular');

  const [selectedExhibit, setSelectedExhibit] = useState();

  const handleViewCounts = async (titleParam, views) => {
    console.log("TitleParam:", titleParam);
    console.log("Views:", views);
  
    try {
      const response = await axios.patch(("http://localhost:5000/popular"), {
        titleParam: titleParam,
        viewed: views
      });
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleCardPress = (item) => {
    router.replace(`/exhibits/exhibit/${item.titleParam}`);
    setSelectedExhibit(item.titleParam);
    let newViews = item.viewed + 1; 
    handleViewCounts(item.titleParam, newViews);
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