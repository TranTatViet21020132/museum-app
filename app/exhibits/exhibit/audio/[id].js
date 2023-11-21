// AudioPlayerScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Stack } from "expo-router";
import { useRouter, useSearchParams } from "expo-router";
import {
  ScreenHeaderBtn
} from "../../../../components";
import { COLORS, icons, SIZES } from "../../../../constants";
import Slider from '@react-native-community/slider';
import axios from "axios";

const AudioPlayerScreen = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [lastPosition, setLastPosition] = React.useState(0);

  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://192.168.1.128:5000/gallery/${params.id}`);
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

  const playSound = async () => {
    console.log('Loading Sound. URI:', data?.speech);
    if (sound) {
      await sound.unloadAsync(); // Unload the previous sound before playing a new one
    }

    const { sound: newSound, status } = await Audio.Sound.createAsync(
      { uri: data?.speech }, // Use the online link from the data
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
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.heart} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ marginTop: SIZES.medium, color: COLORS.lightWhite, fontSize: SIZES.large }}>
          {data.title}
        </Text>
        <TouchableOpacity style={{ 
          width: 135,
          height: 135,
          backgroundColor: COLORS.lightWhite,
          borderRadius: SIZES.small,
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.medium
        }}>
          <Image
            source={{ uri: data.thumbnail }}
            style={{
              width: "100%",
              height: "100%"
            }}
            resizeMode="contain"
          /> 
        </TouchableOpacity>
        <Slider
          style={{ width: '80%'}}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={onSeekBarValueChange}
          onSlidingComplete={onSlidingComplete}
          minimumTrackTintColor={COLORS.primary}
          maximumTrackTintColor={COLORS.gray}
          thumbTintColor={COLORS.primary}
        />
        <View>
          {isPlaying ? 
            <ScreenHeaderBtn
              iconUrl={icons.pause}
              dimension='60%'
              handlePress={() => togglePlayPause()}
              />
              : 
            <ScreenHeaderBtn
              iconUrl={icons.play}
              dimension='60%'
              handlePress={() => togglePlayPause()}
            />
          }
        </View>
          
      </View>

    </SafeAreaView>
  );
};

export default AudioPlayerScreen;