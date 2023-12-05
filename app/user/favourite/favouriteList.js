import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import ScreenHeaderBtn from '../../../components/common/header/ScreenHeaderBtn'
import FavouriteListCard from "../../../components/common/cards/search/FavouriteListCard"
import { COLORS, icons, SIZES } from '../../../constants'
import styles from '../../search/id.style'

const Favourite = ({ navigation }) => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [page, setPage] = useState(1);
  const itemPerPage = 5;
  const [favouriteList, setfavouriteList] = useState([]);
  const [titleList, setTitleList] = useState([])
  const [titleListPerPage, setTitleListPerPage] = useState([])
  const fetchFavourite = async () => {
    setSearchLoader(true);
    try {
      const user = await AsyncStorage.getItem("user-id");

      axios.get(`http://192.168.1.128:5000/user/${user}/like`)
        .then(response => { setfavouriteList(response.data.like) })
        .catch(error =>
          console.error(error)
        )

    } catch (error) {
      console.error(error);
    }
  }

  const fetchTitleList = async () => {
    setSearchLoader(true);
    try {
      const promises = favouriteList.map(async (item) => {
        const response = await axios.get(`http://192.168.1.128:5000/gallery/${item}`);
        return response.data.title;
      });

      const results = await Promise.all(promises);

      setTitleList(results.flat())
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setSearchLoader(false)
    }

  }
  useEffect(() => {
    fetchFavourite();
  }, [])

  useEffect(() => {
    fetchTitleList();
  }, [favouriteList])

  const handlePagination = (direction) => {
    const maxPage = Math.ceil(titleList.length / itemPerPage);
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
    } else if (direction === 'right' && page < maxPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const limitedData = titleList.slice(startIndex, endIndex);

    setTitleListPerPage(limitedData);
  }, [page, titleList, itemPerPage]);

  const message = () => {
    showMessage({
      message: "Delete successfully!",
      type: "info"
    })
  }
  const handleDeleteExhibit = async (deleteItem) => {
    const newFavouriteArray = favouriteList.filter(item => item !== deleteItem)
    try {
      const user = await AsyncStorage.getItem("user-id")
      await axios.patch(`http://192.168.1.128:5000/user/${user}/like`, {
        like: newFavouriteArray
      })
      fetchFavourite()
      fetchTitleList();
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={{ paddingTop: 25 }} >
        <ScreenHeaderBtn
          iconUrl={icons.left}
          dimension='60%'
          handlePress={() => { navigation.navigate("UserInfor"); AsyncStorage.removeItem("item") }}
        />
      </View>
      {favouriteList.length == 0 ?
        <View style={styles.container}>
          <Text style={styles.searchTitle}>Your Favourite is Empty</Text>
        </View>
        :
        <FlatList
          data={titleListPerPage}
          renderItem={({ item, index }) => (
            <FavouriteListCard
              item={item}
              handleNavigate={() => { navigation.navigate("detail/[id]"); AsyncStorage.setItem("item", favouriteList[index + 5 * (page - 1)]) }}
              handleDelete={() => { handleDeleteExhibit(favouriteList[index + 5 * (page - 1)]); message() }}
            />
          )}
          keyExtractor={(item, index) => (item + index).toString()}
          contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
          ListHeaderComponent={() => (
            <>
              <View style={styles.container}>
                <Text style={styles.searchTitle}>Your Favourite</Text>
              </View>
              <View style={styles.loaderContainer}>
                {searchLoader ? (
                  <ActivityIndicator size='large' color={COLORS.primary} />
                ) : (
                  <Text></Text>
                )}
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination('left')}
              >
                <Image
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                <Text style={styles.paginationText}>{page}</Text>
              </View>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination('right')}
              >
                <Image
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        />}
      <FlashMessage position="top" durartion={1000} style={{ backgroundColor: "#83829A" }} />
    </SafeAreaView>
  )
}

export default Favourite