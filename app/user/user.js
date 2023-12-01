import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Animated, Dimensions } from 'react-native';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
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

const widthWindow = Dimensions.get("window").width * 0.9;

export default function User({ navigation }) {
  const [profile, setProfile] = useState([])
  const [userID, setUserID] = useState("");
  let user = "";
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
        user = await AsyncStorage.getItem("user-id");
        setUserID(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();

    // axios.get("http://192.168.1.6:5000/user/" + userID)
    //   .then(response => { setProfile(response.data) })
    //   .catch(error => console.error(error))
    fetch("http://192.168.1.128:5000/user/" + userID)
      .then(response => response.json()
        .then(data => {
          console.log(data);
          setProfile(data);

        })
        .catch(error => {
          console.error(error)
        }))


  }, [])
  const [name, setName] = useState(profile.name);
  const [age, setAge] = useState(profile.age);
  const [gender, setGender] = useState(profile.gender)
  // const [password, setPassword] = useState(profile.password)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [messageChangePassword, setMessageChangePassword] = useState("none");
  const [messageChangeInformation, setMessageChangeInformation] = useState("none");

  const handleChangePassword = async (oldPassword, newPassword, userID) => {
    try {
      const response = await axios.patch(('http://192.168.1.128:5000/user/' + userID + "/password"), {
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

  console.log(name, age, gender)
  const handleChangeInformation = async (name, age, gender, userID) => {
    try {
      const response = await axios.patch(("http://192.168.1.128:5000/user/" + userID + "/"), {
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
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/images/kemal.jpg")}
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
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>ID: {profile._id}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>{profile.email}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="calendar-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>{profile.age} tuổi</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="male-female-outline" color="#777777" size={25} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>{profile.gender}</Text>
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
            <TouchableRipple onPress={() => toggleModal1()}>
              <ListItem>
                <ListItem.Content style={{ marginLeft: 30 }}>
                  <ListItem.Title>Change Password</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableRipple>
            {
              // <Modal
              //   visible={modalVisible1}
              //   transparent
              //   animationType="none"
              //   onRequestClose={closeModal1}
              //   style={{ borderRadius: 10 }}
              // >

              //   <Animated.View
              //     style={{
              //       position: 'absolute',
              //       bottom: 0,
              //       left: 0,
              //       right: 0,
              //       height: '90%',
              //       backgroundColor: 'white',
              //       transform: [{ translateY: modalTranslateY }],
              //     }}
              //   >
              //     {/* Content of the floating screen */}
              //     <TouchableOpacity activeOpacity={1}>
              //       <View style={{ flex: 1, flexDirection: "row", justifyContent: 'right', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
              //         <Ionicons name='close-outline' size={26} color="black" onPress={closeModal1} />
              //       </View>
              //       <View style={styles.changePassword}>
              //         <Text style={{ fontSize: 23, fontWeight: 'bold', justifyContent: "center", alignItems: "center", display: "flex", marginBottom: 50 }}>Change Password</Text>

              //         <TextInput style={styles.input}
              //           placeholder='Old Password'
              //           secureTextEntry={!isPasswordShow}
              //         />
              //         <TouchableOpacity
              //           onPress={() => setIsPasswordShow(!isPasswordShow)}
              //           style={{
              //             position: "absolute",
              //             bottom: 170,
              //             right: 30,
              //           }}
              //         >
              //           {
              //             isPasswordShow == true
              //               ? (<Ionicons name="eye" size={24} color="black" />)
              //               : (<Ionicons name="eye-off" size={24} color="black" />)
              //           }
              //         </TouchableOpacity>
              //         <TextInput style={[styles.input]}
              //           placeholder='New Password'
              //           secureTextEntry={!isPasswordShow}
              //         />
              //         <TouchableOpacity
              //           onPress={() => setIsPasswordShow(!isPasswordShow)}
              //           style={{
              //             position: "absolute",
              //             bottom: 100,
              //             right: 30,
              //           }}
              //         >
              //           {
              //             isPasswordShow == true
              //               ? (<Ionicons name="eye" size={24} color="black" />)
              //               : (<Ionicons name="eye-off" size={24} color="black" />)
              //           }
              //         </TouchableOpacity>

              //         <Text style={{ color: "red", fontSize: 16, marginVertical: 10, marginLeft: "5%" }}>Old password is wrong</Text>

              //         <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} onPress={handleChangePassword}>
              //           <Text style={styles.buttonText}>Submit</Text>
              //         </TouchableOpacity>
              //       </View>
              //     </TouchableOpacity>

              //   </Animated.View>
              // </Modal> 
              <Modal isVisible={modalVisible1} style={{ display: "flex", margin: "0%", marginTop: "20%", borderRadius: 10 }}>
                <View style={{ backgroundColor: "white", paddingBottom: "65%" }}>
                  <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Ionicons name='close-outline' size={26} color="black" onPress={toggleModal1} />
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
            <TouchableRipple onPress={() => { toggleModal2() }}>
              <ListItem>
                <ListItem.Content style={{ marginLeft: 30 }}>
                  <ListItem.Title>Change Information</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableRipple>
            {
              // <Modal
              //   visible={modalVisible2}
              //   transparent
              //   animationType="none"
              //   onRequestClose={closeModal2}
              // >
              //   <Animated.View
              //     style={{
              //       position: 'absolute',
              //       bottom: 0,
              //       left: 0,
              //       right: 0,
              //       height: '90%',
              //       backgroundColor: 'white',
              //       transform: [{ translateY: modalTranslateY }],
              //     }}
              //   >
              //     {/* Content of the floating screen */}
              //     <TouchableOpacity activeOpacity={1}>
              //       {/* <View style={{ flex: 1, flexDirection: "row", justifyContent: 'right', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}> */}
              //       <Ionicons name='close-outline' size={26} color="black" onPress={closeModal2} />
              //       {/* </View> */}
              //       <View style={styles.changePassword}>
              //         <Text style={{ fontSize: 23, fontWeight: 'bold', justifyContent: "center", alignItems: "center", display: "flex", marginBottom: 30 }}>Change Information</Text>

              //         <TextInput style={styles.input}
              //           placeholder='Name'
              //         />
              //         <TextInput style={styles.input}
              //           placeholder='Age'
              //           inputMode='numeric'
              //         />
              //         <Picker

              //           style={styles.picker}
              //         >
              //           <Picker.Item label="Male" value="Male" />
              //           <Picker.Item label="Female" value="Female" />
              //           <Picker.Item label="Other" value="Other" />
              //         </Picker>
              //         <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} >
              //           <Text style={styles.buttonText}>Submit</Text>
              //         </TouchableOpacity>
              //       </View>
              //     </TouchableOpacity>

              //   </Animated.View>
              // </Modal>
              <Modal isVisible={modalVisible2} style={{ display: "flex", margin: "0%", marginTop: "20%", borderRadius: 10 }}>
                <View style={{ backgroundColor: "white", paddingBottom: "65%" }}>
                  <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Ionicons name='close-outline' size={26} color="black" onPress={toggleModal2} />
                  </View>
                  <View style={styles.changePassword}>
                    <View>
                      <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 30 }}>Change Information</Text>

                    </View>

                    <TextInput style={styles.input}
                      // defaultValue={profile.name}
                      // value={profile.name}
                      onChangeText={(nameData) => setName(nameData)}
                      placeholder='Name'
                    />
                    <TextInput style={styles.input}
                      // defaultValue={profile.age}
                      // value={profile.age}
                      onChangeText={(ageData) => setAge(ageData)}
                      placeholder='Age'
                      inputMode='numeric'
                    />
                    <Picker
                      selectedValue={gender}
                      onValueChange={(value, index) => { setGender(value) }}
                      style={styles.picker}
                    >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
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
    marginTop: 30,
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
    // marginTop: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#EEEDF1",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,
    // marginLeft: "5%",
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
    // marginLeft: "5%"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  picker: {
    marginRight: "38%",
    marginBottom: 10,
    paddingLeft: 20,
    width: 200,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    border: "1px solid black",
    borderWidth: 1,
  },
});