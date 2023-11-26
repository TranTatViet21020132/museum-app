import React from 'react';
import { StyleSheet, View, TouchableOpacity,Modal, Animated } from 'react-native';
import { ListItem, Icon } from '@rneui/themed'
import { useEffect, useState, useRef } from 'react';
import {Ionicons} from "@expo/vector-icons"
import { render } from 'react-dom';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';



const modalChangePassword = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnimation = useRef(new Animated.Value(0)).current;


    const openModal = () => {
        setModalVisible(true);
        Animated.timing(slideAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      };
      
      const closeModal = () => {
        Animated.timing(slideAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setModalVisible(false);
        });
      };
      
      const modalTranslateY = slideAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '0%'],
      });
    render(
        <>
          <TouchableRipple onPress={() => openModal()}>
            <ListItem>
              <ListItem.Content style={{marginLeft:30}}>
                <ListItem.Title>Change Password</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableRipple>
          {
            <Modal
            visible={modalVisible}
            transparent
            animationType="none"
            onRequestClose={closeModal}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPress={closeModal}
            >
              <Animated.View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  backgroundColor: 'white',
                  transform: [{ translateY: modalTranslateY }],
                }}
              >
                {/* Content of the floating screen */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Floating Screen Content</Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          </Modal>
          }
          <TouchableRipple onPress={() => console.log('changeInformation pressed')}>
            <ListItem>
              <ListItem.Content style={{marginLeft:30}}>
                <ListItem.Title>Change Information</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableRipple>
        </>
    )
}

export default modalChangePassword;