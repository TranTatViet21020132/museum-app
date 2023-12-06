import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import {
  ScreenHeaderBtn,
} from "../../components";
import { Stack } from "expo-router";
import Modal from "react-native-modal";
import { ListItem } from '@rneui/themed'
import { useEffect, useState } from 'react';
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../../constants"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

export default function User({ navigation }) {
  const [profile, setProfile] = useState([])
  const [userID, setUserID] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);


  const toggleModal1 = () => {
    setModalVisible1(!modalVisible1);
  };
  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user-id");
        setUserID(user)
        axios.get(`http://192.168.1.6:5000/user/${user}`)
          .then(response => { setProfile(response.data) })
          .catch(error =>
            console.error(error)
          )
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [])

  const [name, setName] = useState(profile.name);
  const [age, setAge] = useState(profile.age);
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [messageChangePassword, setMessageChangePassword] = useState("none");
  const [messageChangeInformation, setMessageChangeInformation] = useState("none");

  const handleChangePassword = async (oldPassword, newPassword, userID) => {
    try {
      const response = await axios.patch(('http://192.168.1.6:5000/user/' + userID + "/password"), {
        oldPassword: oldPassword,
        password: newPassword,
      });

      if (oldPassword == "" || newPassword == "") {
        setMessageChangePassword("red");
      }
      if (response.data.message == 'change password fail') {
        setMessageChangePassword("red")
      }
      if (response.data.message == 'change password successfully') {
        setMessageChangePassword("green");
        setTimeout(() => {
          navigation.navigate("login");
          AsyncStorage.removeItem("user-id")
        }, 1000)
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  }

  const handleChangeInformation = async (name, age, gender, userID) => {
    try {
      const response = await axios.patch(("http://192.168.1.6:5000/user/" + userID + "/"), {
        name: name,
        age: age,
        gender: gender,
      });
      console.log(response)
      if (name == "" || age == "" || gender == "") {
        setMessageChangeInformation("red")
      } else {
        setMessageChangeInformation("green");
        setTimeout(() => {
          navigation.navigate("login");
          AsyncStorage.removeItem("user-id");
        }, 1000)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (

    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/images/avatar-user.jpg")}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
              fontSize: 25,
            }]}>{profile.name}</Title>
            <Caption style={styles.caption}>user</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="locate-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20, color: "white" }}>ID: {profile._id}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20, color: "white" }}>{profile.email}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="calendar-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20, color: "white" }}>{profile.age} tuổi</Text>
        </View>
      </View>

      <View style={{ borderWidth: 0.5, borderColor: "white" }}>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { navigation.navigate("favourite") }}>
          <View style={styles.menuItem}>
            <Ionicons name="heart-outline" color="orange" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>

        </TouchableRipple>

        <TouchableRipple onPress={() => { setExpanded(!expanded) }}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="orange" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        {expanded &&
          <>
            <View >
              <TouchableRipple onPress={() => toggleModal1()} style={{ backgroundColor: "#83829A" }}>
                <Text style={{ marginLeft: 50, fontSize: 16, marginTop: 15, marginBottom: 15, color: "white" }}>Change Password</Text>
              </TouchableRipple>
            </View>

            {
              <Modal isVisible={modalVisible1} style={{ display: "flex", margin: "0%", marginTop: "20%", borderRadius: 10 }}>
                <View style={{ backgroundColor: "#D3D3D3", paddingBottom: "65%" }}>
                  <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Ionicons name='close-outline' size={30} color="black" onPress={toggleModal1} />
                  </View>
                  <View style={styles.changePassword}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 30 }}>Change Password</Text>

                    <TextInput style={styles.input}
                      placeholder='Old Password'
                      secureTextEntry={!isPasswordShow}
                      password={true}
                      onChangeText={(oldPasswordData) => setOldPassword(oldPasswordData)}
                      value={oldPassword}
                    />
                    <TouchableOpacity
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                      style={{
                        position: "absolute",
                        // bottom: 170,
                        top: 70,
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
                      onChangeText={(newPasswordData) => setNewPassword(newPasswordData)}
                      value={newPassword}
                    />
                    <TouchableOpacity
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                      style={{
                        position: "absolute",
                        // bottom: 100,
                        right: 30,
                        top: 140,
                      }}
                    >
                      {
                        isPasswordShow == true
                          ? (<Ionicons name="eye" size={24} color="black" />)
                          : (<Ionicons name="eye-off" size={24} color="black" />)
                      }
                    </TouchableOpacity>

                    {messageChangePassword == "none" ?
                      <Text></Text>
                      :
                      (messageChangePassword == "green" ?
                        <Text style={{ color: "green", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Change password successfully</Text>
                        :
                        <Text style={{ color: "red", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Old password is wrong</Text>
                      )
                    }

                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} onPress={() => { handleChangePassword(oldPassword, newPassword, userID) }}>
                      <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            }

            <View>
              <TouchableRipple onPress={() => toggleModal2()} style={{ backgroundColor: "#83829A" }}>
                <Text style={{ marginLeft: 50, fontSize: 16, marginTop: 15, marginBottom: 15, color: "white" }}>Change Information</Text>
              </TouchableRipple>
            </View>
            {
              <Modal isVisible={modalVisible2} style={{ display: "flex", margin: "0%", marginTop: "20%", borderRadius: 10 }}>
                <View style={{ backgroundColor: "#D3D3D3", paddingBottom: "65%" }}>
                  <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Ionicons name='close-outline' size={30} color="black" onPress={toggleModal2} />
                  </View>
                  <View style={styles.changePassword}>
                    <View>
                      <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 30 }}>Change Information</Text>

                    </View>

                    <TextInput style={styles.input}

                      onChangeText={(nameData) => setName(nameData)}
                      placeholder='Name'
                    />
                    <TextInput style={styles.input}
                      onChangeText={(ageData) => setAge(ageData)}
                      placeholder='Age'
                      inputMode='numeric'
                    />

                    {messageChangeInformation == "none" ?
                      <Text></Text>
                      :
                      (messageChangeInformation == "green" ?
                        <Text style={{ color: "green", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Change information successfully!</Text>
                        :
                        <Text style={{ color: "red", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Please fill all field!</Text>
                      )
                    }
                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} onPress={() => handleChangeInformation(name, age, gender, userID)} >
                      <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            }
          </>

        }
        <TouchableRipple onPress={() => { AsyncStorage.removeItem("user-id"); navigation.navigate("login") }}>
          <View style={styles.menuItem}>
            <Ionicons name="exit-outline" color="orange" size={25} />
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
    backgroundColor: COLORS.background,
    color: "white",
    paddingTop: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: "white"
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 0.5,
    borderBottomColor: "white",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  changePassword: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,
    paddingLeft: 20,
    alignItems: "center",
    textAlign: "left",
    fontSize: 20,
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});