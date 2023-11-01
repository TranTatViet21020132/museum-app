import {
  View,
  Text,
} from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Viet</Text>
        <Text style={styles.welcomeMessage}>We make art with you</Text>
      </View>
    </View>
  );
};

export default Welcome;
