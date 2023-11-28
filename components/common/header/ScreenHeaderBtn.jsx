import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Modal, View, Text, Animated } from 'react-native';
import styles from './screenheader.style';
import { icons, COLORS } from '../../../constants';
import { useRouter } from "expo-router";

const categories = ['Giới thiệu', 'Lịch sử bảo tàng', 'Tham quan', 'Nội quy', 'Lệ phí', "Vị trí"];

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isDropdownVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isDropdownVisible, fadeAnim]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCategorySelect = (category) => {
    // Handle category selection
    toggleDropdown();
    router.push(`museum/${category}`);
    console.log(category);
  };

  return (
    <>
      <TouchableOpacity style={styles.btnContainer} onPress={iconUrl === icons.menu ? toggleDropdown : handlePress}>
        <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)} />
      </TouchableOpacity>

      {iconUrl === icons.menu && (
        <Modal animationType="none" transparent={true} visible={isDropdownVisible} onRequestClose={toggleDropdown}>
          <View>
            <TouchableOpacity
              style={styles.dropdownContainer}
              onPress={toggleDropdown}
            >
              <Animated.View
              style={{ 
                backgroundColor: COLORS.gray3,
                padding: 10,
                borderRadius: 10, 
                marginTop: 100,
                opacity: fadeAnim,
                shadowColor: COLORS.lightWhite,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 15,
                }}>
                {categories.map((category, index) => (
                  <Animated.View key={category} style={{ opacity: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1] }) }}>
                    <TouchableOpacity onPress={() => handleCategorySelect(category)}>
                      <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                  </Animated.View>
                ))}
              </Animated.View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ScreenHeaderBtn;
