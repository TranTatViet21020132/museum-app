import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./exhibitcard.style";

const ExhibitCard = ({ item, selectedExhibit, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedExhibit, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedExhibit, item)} onPress={() => handleCardPress(item)}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.logoImage}
          resizeMode="contain"
        /> 
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedExhibit, item)} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExhibitCard;
