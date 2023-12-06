import { View, Text } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';

import styles from "./specifics.style";
import ExhibitCard from '../../common/cards/exhibits/ExhibitCard'

const Specifics = ({ title, points }) => {
  const router = useRouter();
  
  const [selectedExhibit, setSelectedExhibit] = useState();

  const handleCardPress = (item) => {
    router.replace(`/exhibits/exhibit/${item.titleParam}`);
    setSelectedExhibit(item.titleParam);
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
              <ExhibitCard
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

export default Specifics;
