import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


const ProfileCard = ({ name, gender, phoneNumber,imageUri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.imgPlaceholder}>
            <Image
              source={{
                uri:
                 imageUri
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.gender}>{gender}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const handleLogout = () => {
  navigation.navigate("../login");
}

export default function User() {
  const [list, setList] = useState([])
  const [profile,setProfile]=useState([])

  const fetchProfile=()=>{
   fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
   .then(response=>{
    return response.json()
   })
   .then(data=>{
    setProfile(data.results)
    // setList(data)
   })
  }

   useEffect(()=>{
   fetchProfile()
   },[])


  return (
  
    <SafeAreaView>
      {/* <View>
        <Text>User</Text>
      </View> */}
      <View style={styless.container}>
     
        {profile.map((user)=>( 
            <ProfileCard
          name={`${user.name.title} ${user.name.first} ${user.name.last}`}
          gender={user.gender}
          phoneNumber={user.phone}
          imageUri={user.picture.large}
        />
        ))}
     
      </View>

      <TouchableOpacity style={{display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#FF5A2D",
                                padding: 10,
                                borderRadius: 10,
                                width: "100%",
                                marginTop: 10,
                                backgroundColor:"#e58a2e"}} onPress={handleLogout}>
            <Text style={{color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        }}>
                          Log out</Text>
        </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styless = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const styles = StyleSheet.create({
  container: {
    height: 790,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCD4E6',
  },
  body: {
    padding: 25,
  },
  card: {
    width: 400,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
  },
  imgPlaceholder: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    marginLeft: 20,
  },
  name: {
    fontWeight: '600',
  },
  gender: {
    fontWeight: '600',
    marginTop: 10,
    color: '#888',
  },
  phoneNumber: {
    color: 'blue',
    marginTop: 6,
  },
});

