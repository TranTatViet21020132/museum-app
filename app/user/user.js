import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Modal, Animated, Dimensions, Picker } from 'react-native';
import { ListItem, Icon } from '@rneui/themed'
import { useEffect, useState, useRef } from 'react';
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
const handleLogout = () => {
  AsyncStorage.removeItem("user-id");
  navigation.navigate("../login");
}
const widthWindow = Dimensions.get("window").width * 0.9;

export default function User() {
  const [list, setList] = useState([])
  const [profile, setProfile] = useState([])
  const [userID, setUserID] = useState("");
  let user = "";
  const [expanded, setExpanded] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const slideAnimation = useRef(new Animated.Value(0)).current;

  const openModal1 = () => {
    setModalVisible1(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal1 = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible1(false);
    });
  };
  const openModal2 = () => {
    setModalVisible2(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal2 = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible2(false);
    });
  };

  const modalTranslateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  const handleChangePassword = () => {
    console.log("Successfull")
  }

  // getUser();


  //  useEffect(()=>{

  //     const getUser = async () => {
  //       try{
  //         user =  await AsyncStorage.getItem("user-id");
  //         setUserID(user);
  //         console.log(user);
  //       } catch(error) {
  //         console.log(error);
  //       }

  //     }
  //     getUser();

  //     axios.get("http://localhost:5000/user/" + userID)
  //       .then(response => response.json()
  //         .then(data => setProfile(data)))
  //     // fetch("http://localhost:5000/user/" + userID)
  //     //   .then(response => response.json()
  //     //   .then(data => {
  //     //     // console.log(data);
  //     //     setProfile(data);

  //     //   })
  //     //   .catch(error => {
  //     //     console.error(error);
  //     //   }))


  //  } , [])

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://ui-avatars.com/api/?name=V',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
              fontSize: 25,
            }]}>Vuong</Title>
            <Caption style={styles.caption}>user</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="locate-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>ID: 12345</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>v@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="calendar-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>20</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="male-female-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>Nam</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>

        </TouchableRipple>

        <TouchableRipple onPress={() => { setExpanded(!expanded) }}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        {expanded &&
          <>
            <TouchableRipple onPress={() => openModal1()}>
              <ListItem>
                <ListItem.Content style={{ marginLeft: 30 }}>
                  <ListItem.Title>Change Password</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableRipple>
            {
              <Modal
                visible={modalVisible1}
                transparent
                animationType="none"
                onRequestClose={closeModal1}
                style={{ borderRadius: 10 }}
              >

                <Animated.View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '90%',
                    backgroundColor: 'white',
                    transform: [{ translateY: modalTranslateY }],
                  }}
                >
                  {/* Content of the floating screen */}
                  <TouchableOpacity activeOpacity={1}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'right', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                      <Ionicons name='close-outline' size={26} color="black" onPress={closeModal1} />
                    </View>
                    <View style={styles.changePassword}>
                      <Text style={{ fontSize: 23, fontWeight: 'bold', justifyContent: "center", alignItems: "center", display: "flex", marginBottom: 50 }}>Change Password</Text>

                      <TextInput style={styles.input}
                        placeholder='Old Password'
                        secureTextEntry={!isPasswordShow}
                      />
                      <TouchableOpacity
                        onPress={() => setIsPasswordShow(!isPasswordShow)}
                        style={{
                          position: "absolute",
                          bottom: 170,
                          right: 30,
                        }}
                      >
                        {
                          isPasswordShow == true
                            ? (<Ionicons name="eye" size={24} color="black" />)
                            : (<Ionicons name="eye-off" size={24} color="black" />)
                        }
                      </TouchableOpacity>
                      <TextInput style={[styles.input]}
                        placeholder='New Password'
                        secureTextEntry={!isPasswordShow}
                      />
                      <TouchableOpacity
                        onPress={() => setIsPasswordShow(!isPasswordShow)}
                        style={{
                          position: "absolute",
                          bottom: 100,
                          right: 30,
                        }}
                      >
                        {
                          isPasswordShow == true
                            ? (<Ionicons name="eye" size={24} color="black" />)
                            : (<Ionicons name="eye-off" size={24} color="black" />)
                        }
                      </TouchableOpacity>

                      <Text style={{ color: "red", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Old password is wrong</Text>

                      <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} onPress={handleChangePassword}>
                        <Text style={styles.buttonText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                </Animated.View>
              </Modal>
            }
            <TouchableRipple onPress={() => { openModal2() }}>
              <ListItem>
                <ListItem.Content style={{ marginLeft: 30 }}>
                  <ListItem.Title>Change Information</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableRipple>
            {
              <Modal
                visible={modalVisible2}
                transparent
                animationType="none"
                onRequestClose={closeModal2}
              >
                <Animated.View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '90%',
                    backgroundColor: 'white',
                    transform: [{ translateY: modalTranslateY }],
                  }}
                >
                  {/* Content of the floating screen */}
                  <TouchableOpacity activeOpacity={1}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'right', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                      <Ionicons name='close-outline' size={26} color="black" onPress={closeModal2} />
                    </View>
                    <View style={styles.changePassword}>
                      <Text style={{ fontSize: 23, fontWeight: 'bold', justifyContent: "center", alignItems: "center", display: "flex", marginBottom: 30 }}>Change Information</Text>

                      <TextInput style={styles.input}
                        placeholder='Name'
                      />
                      <TextInput style={styles.input}
                        placeholder='Age'
                        inputMode='numeric'
                      />
                      <Picker

                        style={styles.picker}
                      >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                      </Picker>
                      <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} >
                        <Text style={styles.buttonText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                </Animated.View>
              </Modal>
            }
          </>

        }
        <TouchableRipple onPress={() => { handleLogout() }}>
          <View style={styles.menuItem}>
            <Ionicons name="exit-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    border: "1px solid transparent",
    borderBottomColor: "black"
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    border: "1px solid transparent",
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  changePassword: {
    marginTop: 20,
  },
  input: {
    marginTop: 20,
    border: "1px solid black",
    height: 50,
    width: "90%",
    marginLeft: "5%",
    paddingLeft: 20,
    fontSize: 20,
    borderRadius: 10,
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginTop: 10,
    marginLeft: "5%"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  picker: {
    marginTop: 20,
    marginLeft: "5%",
    marginBottom: 10,
    paddingLeft: 20,
    width: 200,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
  },
});