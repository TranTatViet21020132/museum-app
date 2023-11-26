import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import NearbyCard from '../../components/common/cards/nearby/NearbyCard'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const SearchList = () => {
    const params = useSearchParams();
    const router = useRouter();
  
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);
  
    const handleSearch = async () => {
      setSearchLoader(true);
      setSearchResult([]);
  
      try {
        const response = await axios.post('http://localhost:5000/gallery/search/', {
          query: params.id, // Assuming params.id is the query parameter
        });
  
        setSearchResult(response.data); // Set the search results from the API response
      } catch (error) {
        setSearchError('Oops, something went wrong'); // Handle error appropriately
      } finally {
        setSearchLoader(false);
      }
    };
  
    const handlePagination = (direction) => {
      if (direction === 'left' && page > 1) {
        setPage(page - 1);
        handleSearch();
      } else if (direction === 'right') {
        setPage(page + 1);
        handleSearch();
      }
    };
  
    useEffect(() => {
      handleSearch();
    }, [page]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.background },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension='60%'
                    handlePress={() => router.back()}
                    />
                ),
                headerTitle: "",
                }}
            />
            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyCard
                        job={item}
                        handleNavigate={() => router.push(`/search-details/${item.titleParam}`)}
                    />
                )}
                keyExtractor={(item) => item.titleParam}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>Searching results for: {params.id}</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
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
            />
        </SafeAreaView>
    )
}

export default SearchList;