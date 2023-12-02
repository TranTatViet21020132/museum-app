import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./search.style";

import { icons, COLORS } from "../../constants";


const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => {
    if (searchTerm) {
      console.log(searchTerm);
      router.replace(`/search/${searchTerm}`)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SearchBar;