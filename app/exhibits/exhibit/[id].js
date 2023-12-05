import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import {
  JobAbout,
  JobTabs,
  Specifics,
  ScreenHeaderBtn
} from "../../../components";
import * as React from 'react';
import { Stack } from "expo-router";
import { useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { COLORS, icons, images, SIZES } from "../../../constants";
import styles from "../id.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage, { showMessage } from "react-native-flash-message";

const tabs = ["Contents", "Images", "Related Articles"];

const ExhibitLinks = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [titleParamStack, setTitleParamStack] = useState([]);

  useEffect(() => {
    if (params.id) {
      setTitleParamStack((prevStack) => [...prevStack, params.id]);
    }
  }, [params.id]);

  const handleBack = () => {
    titleParamStack.pop();

    if (titleParamStack.length !== 0) {
      const prevTitleParam = titleParamStack.pop();
      console.log(prevTitleParam);
      router.push(`exhibits/exhibit/${prevTitleParam}`);
    } else {
      router.push(`exhibits/exhibit/trung-bay-thuong-xuyen-p1`);
    }
  };

  const [isSave, setIsSave] = useState(false)
  const setSaveForExhibition = async () => {
    const user = await AsyncStorage.getItem("user-id");
    try {
      const response1 = await axios.get(`http://192.168.1.6:5000/user/${user}/like`)
      const checkIsInLikeList = response1.data.like.includes(params.id);
      setIsSave(checkIsInLikeList)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    setSaveForExhibition();
  }, [])
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log(params.id);
    setIsLoading(true);
    try {
      const response = await axios.get(`http://192.168.1.6:5000/gallery/${params.id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    refetch();
  }, [params.id]);


  const handleAddFavourite = async () => {
    let newLikeList = [];
    const user = await AsyncStorage.getItem("user-id");
    try {
      const response1 = await axios.get(`http://192.168.1.6:5000/user/${user}/like`)
      const checkIsInLikeList = response1.data.like.includes(params.id);
      if (checkIsInLikeList) {
        newLikeList = response1.data.like.filter(item => item !== params.id)
        setIsSave(false)
        console.log(newLikeList)
      } else {
        newLikeList = [...response1.data.like, params.id];
        setIsSave(true)
        console.log(newLikeList)
      }
      await axios.patch(`http://192.168.1.6:5000/user/${user}/like`, {
        like: newLikeList
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleAudioPlayer = () => {
    if (data?.speech) {
      console.log('Audio URI:', data.speech);
      router.push(`exhibits/exhibit/audio/${params.id}`, { replace: true });
    }
  };

  const paragraphs = data?.paragraph?.map((item, index, array) => {
    const newText = (item.text.startsWith('-') || /^\d/.test(item.text))
      ? `\n${item.text}`
      : item.text;

    // Add a newline if the current and next items don't start with a dash or a number
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
            ) : <Specifics
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      {params.id === "trung-bay-thuong-xuyen-p1"
        ?
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={{ flexDirection: 'row', marginLeft: 24 }}>
                <ScreenHeaderBtn iconUrl={icons.menu} dimension='80%' />
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
              </View>
            ),

          }}
        />
        :
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={{ flexDirection: 'row', marginLeft: 22 }}>
                <ScreenHeaderBtn
                  iconUrl={icons.back}
                  dimension='100%'
                  handlePress={() => handleBack()}
                />
              </View>

            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                {data?.speech && <ScreenHeaderBtn
                  iconUrl={icons.headphones}
                  dimension='70%'
                  handlePress={() => handleAudioPlayer()}
                />
                }
                {isSave ?
                  <ScreenHeaderBtn iconUrl={icons.save_orange} dimension='70%'
                    handlePress={() => { handleAddFavourite(); }} />
                  :
                  <ScreenHeaderBtn iconUrl={icons.save} dimension='70%'
                    handlePress={() => { handleAddFavourite(); }} />
                }
              </View>
            ),
            headerTitle: "",
          }}
        />
      }

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <View style={styles.container}>
              <Text style={styles.title}>{data?.title || 'Loading...'}</Text>
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
  );
};

export default ExhibitLinks;