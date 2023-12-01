import { View, Text } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';

import styles from "./specifics.style";
import SearchCard from '../../common/cards/search/SearchCard'

const SearchSpecifics = ({ title, points }) => {
  const router = useRouter();
  
  const [selectedExhibit, setSelectedExhibit] = useState();

  const handleCardPress = (item) => {
    router.push(`/search/search-details/${item.titleParam}`);
    setSelectedExhibit(item.titleParam);
    console.log("working");
  };

  return (
    <>
      {title === "Contents" ?
        <View style={styles.container}>
          <Text style={styles.title}>{title}:</Text>

          <View style={styles.pointsContainer}>
            <View style={styles.paragraph}>
              <Text style={styles.text}>{points}</Text>
            </View>
          </View>
        </View>
        : 
        <View style={styles.container}>
          <Text style={styles.title}>{title}:</Text>
          <View style = {{display: "flex", flexDirection: "row", flex: 1, flexWrap: "wrap", gap: 5, marginTop: 10, paddingBottom: 30 }}>
            {points?.map((exhibit, index) => (
              <SearchCard
              key = {index}
              item = {exhibit}
              selectedExhibit = {selectedExhibit}
              handleCardPress = {handleCardPress}
              />
            ))}
          </View>
        </View>
      }
    </>
    
  );
};

export default SearchSpecifics;
