import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView
} from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Images:</Text>

      {info.map((img, index) => (
        <View style={styles.tabsContainer} key={index}>
          <Image
            source={{ uri: img.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{img.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default About;
