// import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity , StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
// import Button from "./login/Button"
import { COLORS, Icons } from '../../constants';

const Button = () => {
    return (
        <TouchableOpacity
            style={{
                width: "95%",
                marginTop: 20,
                paddingBottom: 16,
                paddingVertical: 10,
                borderColor: COLORS.background,
                borderWidth: 2,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={() => navigation.navigate("main")}
        >
            <Text>Login</Text>
        </TouchableOpacity>
    )
}

const LoginScreen = () => {

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  return (
    
    <SafeAreaView>
      <View style={{marginLeft: 15}}>
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, justifyContent:"center", alignContent:"center" }}>
          <Text style={{
            fontSize: 25,
            fontWeight: "bold",
            marginVerical: 12,
            marginLeft: "40%",
            marginTop: 30,
            color: COLORS.background,
          }}>
            Login</Text>
        </View>

        <View style={{ marginBottom: 12, marginTop: 20 }}>
          <Text style={{
              fontSize: 20,
              fontWeight: 400,
              marginVertical: 10,
          }}>Email address</Text>

          <View style={{
              width: "95%",
              height: 48,
              borderColor: COLORS.background,
              borderWidth: 1,
              borderRadius: 8,
              //alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
          }}>
              <TextInput
                  placeholder='Enter your email address'
                  placeholderTextColor={COLORS.background}
                  keyboardType='email-address'
                  style={{
                      width: "95%",
                      fontSize: 20,
                      outlineColor: 'transparent'
                  }}
              />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{
              fontSize: 20,
              fontWeight: 400,
              marginVertical: 8
          }}>Password</Text>

          <View style={{
              width: "95%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              // alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
          }}>
              <TextInput
                  placeholder='Enter your password'
                  placeholderTextColor={COLORS.background}
                  secureTextEntry={!isPasswordShow}
                  style={{
                      width: "95%",
                      fontSize: 20,
                      outlineColor: 'transparent'
                  }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordShow(!isPasswordShow)}
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 12,
                }}
              >
                {
                    isPasswordShow == true 
                  ? (<Ionicons name="eye" size={24} color={COLORS.background} />) 
                  : (<Ionicons name="eye-off" size={24} color={COLORS.background} />)
                }
              </TouchableOpacity>
              </View>
          </View>
          
          <View style={{fontSize: 25}}>
            <Button></Button>
          </View>
          
      </View>
    </SafeAreaView>
  )
};


export default LoginScreen;