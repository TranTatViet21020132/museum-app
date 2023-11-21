import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbycard.style";
//"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
const NearbyCard = ({ item, selectedExhibit, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedExhibit, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedExhibit, item)}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.logoImage}
          resizeMode="contain"
        /> 
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title(selectedExhibit, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.viewed}>
            Views: {item?.viewed}
          </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCard;
