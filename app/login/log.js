import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, Icons } from '../../constants';
import axios from 'axios';
import { Redirect } from 'expo-router';

const widthWindow = Dimensions.get("window").width * 0.9;
function Log({ navigation }) {
    // const navigation = useNavigation();

    const [login, setLogin] = useState(false);
    const [agree, setAgree] = useState(false);
    const [warning, setWarning] = useState(false);
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.6:5000/login', {
                email,
                password,
            });

            if (email === "" || password === "") {
                setWarning(true)
                setAgree(false);
            } else if (response.data === "0") {
                setWarning(true);
                setAgree(false)
                console.log("Failed")
            } else {
                AsyncStorage.setItem("user-id", response.data._id);
                setWarning(false);
                setAgree(true)
                navigation.navigate("main", { screen: "main" })
                setLogin(true);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    }

    const handleRegister = () => {
        navigation.navigate('register', { screen: "register" })
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.para}>Login and discover museum</Text>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "red", fontSize: 16 }}>{warning ? "Wrong email or password" : ""}</Text>
            </View>
            <View>
                <TextInput style={styles.lableInput} value={email}
                    onChangeText={(emailData) => {
                        setemail(emailData);
                    }} autoCapitalize='none' autoCorrect={false}
                    placeholder='Enter your email'
                    placeholderTextColor='#7d7d7d' />
            </View>
            <View>
                <TextInput style={styles.lableInput} value={password}
                    onChangeText={(passwordData) => {
                        setPassword(passwordData);
                    }} autoCapitalize='none' secureTextEntry={!isPasswordShow}
                    placeholder='Enter your password'
                    placeholderTextColor='#7d7d7d' />

                <TouchableOpacity
                    onPress={() => setIsPasswordShow(!isPasswordShow)}
                    style={{
                        position: "absolute",
                        bottom: 34,
                        right: 15,
                    }}
                >
                    {
                        isPasswordShow == true
                            ? (<Ionicons name="eye" size={24} color={COLORS.background} />)
                            : (<Ionicons name="eye-off" size={24} color={COLORS.background} />)
                    }
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#83829A" }]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.forgotStyle} onPress={handleRegister}>
                <Text style={{ color: "gray", fontSize: 17 }}>Don't have an account?</Text>
                Sign Up
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 50,
        height: "100%",
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    mainHeader: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1.5,
        marginBottom: 10,
        marginTop: 20,
        color: "#DD5A2D",
        paddingTop: 30,
    },
    para: {
        fontSize: 20,
        color: "black",
        paddingBottom: 30,
        lineHeight: 25,
    },
    lableInput: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "#EEEDF1",
        borderRadius: 10,
        width: widthWindow,
        height: 55,
        marginBottom: 20,
        paddingLeft: 20,
        alignItems: "center",
        textAlign: "left",
        fontSize: 20,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    wrapperText: {
        lineHeight: 20,
        marginLeft: 5,
        fontSize: 15,
        color: "#7d7d7d",
    },
    buttonStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF5A2D",
        padding: 10,
        borderRadius: 10,
        width: widthWindow,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    forgotStyle: {
        color: "#FF5A2D",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        textAlign: "center",
    }
})
export default Log