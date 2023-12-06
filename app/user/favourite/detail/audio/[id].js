import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Stack } from "expo-router";
import {
    ScreenHeaderBtn
} from "../../../../../components";
import { COLORS, icons } from "../../../../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import axios from "axios";
import styles from './id.style';

const AudioFavourite = ({ navigation }) => {
    const [nameExhibit, setNameExhibit] = useState("")
    const nameExhibitPromise = AsyncStorage.getItem("item");
    nameExhibitPromise.then((result) => {
        setNameExhibit(result)
    })

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [lastPosition, setLastPosition] = useState(0);

    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://192.168.1.128:5000/gallery/${nameExhibit}`);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    console.log(data)
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    useEffect(() => {
        refetch();
    }, [nameExhibit]);

    const playSound = async () => {
        console.log('Loading Sound. URI:', data?.speech);
        if (sound) {
            await sound.unloadAsync(); // Unload the previous sound before playing a new one
        }

        const { sound: newSound, status } = await Audio.Sound.createAsync(
            { uri: data.speech }, // Use the online link from the data
            { shouldPlay: true, positionMillis: lastPosition, progressUpdateIntervalMillis: 500 } // Use the last position if available
        );

        // Set up a callback for progress updates
        newSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
                setPosition(status.positionMillis);
            }
        });

        setSound(newSound);
        setDuration(status.durationMillis || 0); // Set duration when loading sound with default value 0
        setIsPlaying(true);
    };

    const onSeekBarValueChange = (value) => {
        setPosition(value);
    };

    const onSlidingComplete = (value) => {
        if (sound) {
            sound.setPositionAsync(value);
            setLastPosition(value);
        }
    };

    const pauseSound = async () => {
        if (sound) {
            const status = await sound.getStatusAsync();
            if (status.isLoaded && status.isPlaying) {
                setLastPosition(status.positionMillis); // Save the current position
                console.log('Last Position:', status.positionMillis); // Log the last position for debugging
                await sound.pauseAsync();
                setIsPlaying(false);
                setPosition(status.positionMillis); // Update the position when pausing
            }
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            pauseSound();
        } else {
            playSound();
        }
    };

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.background },
                    headerShadowVisible: false,
                    headerLeft: () => (
                    <View style={{ flexDirection: 'row', marginLeft: 22 }}>
                        <ScreenHeaderBtn
                        iconUrl={icons.back}
                        dimension='100%'
                        handlePress={() => { navigation.navigate("detail/[id]"); }}
                        />
                    </View>
                    ),
                    headerTitle: "",
                }}
            />

            <View style={styles.audioContainer}>
                <Text style={styles.audioTitle}>
                    {data?.title}
                </Text>
                <View style={styles.thumbnailContainer}>
                    <Image
                        source={{ uri: data?.thumbnail }}
                        style={styles.thumbnail}
                        resizeMode="contain"
                    />
                </View>
                <Slider
                    style={styles.seekBar}
                    minimumValue={0}
                    maximumValue={duration}
                    value={position}
                    onValueChange={onSeekBarValueChange}
                    onSlidingComplete={onSlidingComplete}
                    minimumTrackTintColor={COLORS.primary}
                    maximumTrackTintColor={COLORS.gray}
                    thumbTintColor={COLORS.primary}
                />
                <View style={styles.playbacks}>
                    <Pressable
                        style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#7a7a7a" : COLORS.background,
                        },
                        styles.timerControl,
                        ]}
                    >
                        <Image
                        source={icons.replay}
                        resizeMode='cover'
                        style={styles.btnImg}
                        />
                    </Pressable>
                    <View>
                        {isPlaying ?
                        <Pressable
                            style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#7a7a7a" : COLORS.background,
                            },
                            styles.btnContainer,
                            ]}
                            onPress={() => togglePlayPause()}>
                            <Image
                            source={icons.pause}
                            resizeMode='cover'
                            style={styles.btnImg}
                            />
                        </Pressable>
                        :
                        <Pressable
                            style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#7a7a7a" : COLORS.background,
                            },
                            styles.btnContainer,
                            ]} onPress={() => togglePlayPause()}>
                            <Image
                            source={icons.play}
                            resizeMode='cover'
                            style={styles.btnImg}
                            />
                        </Pressable>
                        }
                    </View>
                    <Pressable
                        style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#7a7a7a" : COLORS.background,
                        },
                        styles.timerControl,
                        ]}
                    >
                        <Image
                        source={icons.forward}
                        resizeMode='cover'
                        style={styles.btnImg}
                        />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AudioFavourite