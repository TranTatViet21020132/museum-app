import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import {
    JobAbout,
    JobTabs,
    Specifics,
    ScreenHeaderBtn
} from "../../../../components";
import { Stack } from "expo-router";
import SearchSpecifics from "../../../../components/details/specifics/SearchSpecifics";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, icons, SIZES } from "../../../../constants";
import styles from "../id.style";
import axios from "axios";

const tabs = ["Contents", "Images", "Related Articles"];

const FavouriteDetail = ({ navigation }) => {
    const [nameExhibit, setNameExhibit] = useState("")
    const nameExhibitPromise = AsyncStorage.getItem("item");
    nameExhibitPromise.then((result) => {
        setNameExhibit(result)
    })

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://192.168.43.2:5000/gallery/${nameExhibit}`);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [nameExhibit]);

    const paragraphs = data?.paragraph?.map((item, index, array) => {
        const newText = (item.text.startsWith('-') || /^\d/.test(item.text))
            ? `\n${item.text}`
            : item.text;
        const nextItem = array[index + 1];
        const addNewline = !nextItem || !(nextItem.text.startsWith('-') || /^\d/.test(nextItem.text));

        return (
            <Text key={index} style={styles.text}>
                {newText}{addNewline ? '\n' : ' '}
            </Text>
        );
    });
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch (activeTab) {
            case "Contents":
                return (
                    <>
                        {isLoading ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : <Specifics
                            title='Contents'
                            points={paragraphs ?? ["N/A"]}
                        />
                        }
                    </>

                );

            case "Images":
                return (
                    <>
                        {isLoading ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : <JobAbout info={data?.images ?? "No data provided"} />
                        }
                    </>
                );

            case "Related Articles":
                return (
                    <>
                        {isLoading ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : <SearchSpecifics
                            title='Related Articles'
                            points={error ? ["N/A"] : data?.navigator}
                        />
                        }
                    </>
                );

            default:
                return null;
        }
    };

    const handleBack = () => {
        AsyncStorage.removeItem("item")
        navigation.navigate("favourite-list");
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 30 }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.background },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                                <ScreenHeaderBtn
                                    iconUrl={icons.back}
                                    dimension='100%'
                                    handlePress={() => { handleBack() }}
                                />
                            </View>

                        ),
                        headerTitle: "",
                    }}
                />

                {data?.speech && <View style={{ paddingTop: 30, paddingLeft: "55%" }} >
                    <ScreenHeaderBtn
                        iconUrl={icons.headphones}
                        dimension='60%'
                        handlePress={() => { navigation.navigate("audio/[id]") }}
                    />
                </View>}
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
                        <View style={styles.container}>
                            {data && data.title && <Text style={styles.title}>{data.title}</Text>}

                            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                                <View style={{ padding: SIZES.medium }}>
                                    <JobTabs
                                        tabs={tabs}
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                    />

                                    {displayTabContent()}
                                </View>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavouriteDetail