import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import SearchListCard from '../../components/common/cards/search/SearchListCard'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const SearchList = () => {
    const params = useSearchParams();
    const router = useRouter();
    const itemPerPage = 10;

    const [searchResult, setSearchResult] = useState([]);
    const [searchResultPerPage, setSearchResultPerPage] = useState([])
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);

        try {
            const response = await axios.post('http://192.168.1.128:5000/gallery/search/', {
                query: params.id, // Assuming params.id is the query parameter
            });

            setSearchResult(response.data); // Set the search results from the API response
            console.log(searchResult)
        } catch (error) {
            setSearchError('Oops, something went wrong'); // Handle error appropriately
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        const maxPage = Math.ceil(searchResult.length / itemPerPage);
        if (direction === 'left' && page > 1) {
            setPage(page - 1);
            handleSearch();
        } else if (direction === 'right' && page < maxPage) {
            setPage(page + 1);
            handleSearch();
        }
    };

    useEffect(() => {
        handleSearch();
    }, [page]);
    useEffect(() => {
        // Update limitedData based on the current page and itemsPerPage
        const startIndex = (page - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        const limitedData = searchResult.slice(startIndex, endIndex);

        // Update the state with the limitedData
        setSearchResultPerPage(limitedData);
    }, [page, searchResult, itemPerPage]);
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
                data={searchResultPerPage}
                renderItem={({ item }) => (
                    <SearchListCard
                        item={item}
                        handleNavigate={() => router.replace(`search/search-details/${item.titleParam}`)}
                    />
                )}
                keyExtractor={(item, key) => (item.titleParam + key).toString()}
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