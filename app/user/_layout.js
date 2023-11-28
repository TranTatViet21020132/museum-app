// import React from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { useEffect, useState } from 'react';
// import {Ionicons} from "@expo/vector-icons"
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const handleLogout = async () => {
//   await AsyncStorage.removeItem("user-id");
//   navigation.navigate("../login");
// }

// export default function User() {
//   const [list, setList] = useState([])
//   const [profile,setProfile]=useState([])
//   const [userID, setUserID] = useState(null);
  
//   // getUser();
//   const fetchProfile= async ()=>{
//     const getUser = async () => {
//       const user = await AsyncStorage.getItem("user-id");
//       setUserID(user);
//       // console.log(user);
//     }
//     getUser();
    
//     fetch("http://localhost:5000/user/" + userID)
//       .then(response => response.json()
//       .then(data => {
//         // console.log(data);
//         setProfile(data);
        
//       })
//       .catch(error => {
//         console.error(error);
//       }))
//       // const response = await axios.get("http://localhost:5000/user/" + userID)
//       // console.log(response.data);
//       // setProfile(response.data);
    
    
//     // const pro = JSON.parse(response.data);
//     // console.log(pro);
//     // setProfile(JSON.stringify(response.data));
//     // console.log(Object.getPrototypeOf(profile));
//   }

//    useEffect(()=>{
//    fetchProfile()
//    })

//   return (
  
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//       <View>
//         {/* <Text>User</Text> */}
//         <Ionicons style={styles.icon} name="person" size={70} color="black" />
//         <Text style={styles.idUser}>ID: {profile._id}</Text>
      
//         <TextInput style={styles.input}
//         value={profile.email}/>
//         <TextInput style={styles.input}
//         value={profile.name}/>
//         <TextInput style={styles.input}
//         value={profile.age}/>
//         <TextInput style={styles.input}
//         value={profile.gender}/>

//       </View>     
//       <TouchableOpacity style={{display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 backgroundColor: "#83829A",
//                                 padding: 10,
//                                 borderRadius: 10,
//                                 width: "100%",
//                                 marginTop: 10,
//                                 }} onPress={handleLogout}>
//             <Text style={{color: "white",
//                         fontSize: 20,
//                         fontWeight: "bold",
//                         }}>
//                           Log out
//               </Text>
//         </TouchableOpacity>
//       </ScrollView>
       
     
//     </SafeAreaView>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: "#6b6b67",
//   },  
//   icon:{
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     marginTop: 20,
//     borderRadius: "100%",
//     borderColor: "black",
//   },
//   idUser: {
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     fontSize: 20
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderBottomColor: "black"
//   },
// })

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import User from "./user"
import Favourite from "./favourite";

const Stack = createStackNavigator();

const UserScreen = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "",
        href: null,
      }}
      
       name="user" component={User}/>
       <Stack.Screen
      options={{
        headerShadowVisible: true,
        headerTitle: "",
        href: null,
      }}
       name="favourite" component={Favourite}/>
    </Stack.Navigator>
  )
}

export default UserScreen