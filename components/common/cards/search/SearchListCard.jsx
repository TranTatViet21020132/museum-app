import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./searchlistcard.style";

const SearchListCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.title}
        </Text>

        {/* <Text style={styles.jobType}>{job?.job_employment_type}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default SearchListCard;
