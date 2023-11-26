import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../../constants';

const Welcome = () => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={["white", "#83829A", "black"]}
        >
            <View style={{ flex: 1 , marginTop: 30}}>
                <View>
                    <Image
                        source={require("../../assets/images/1.jpg")}
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 10,
                            position: "absolute",
                            top: -20,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/images/2.jpg")}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 10,
                            position: "absolute",
                            top: -40,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-30deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/images/3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 80,
                            left: -30,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/images/4.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 20,
                            position: "absolute",
                            top: 100,
                            left: 130,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 330,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 45,
                        fontWeight: 800,
                        color: "white"
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 42,
                        fontWeight: 800,
                        color: "white"
                    }}>Started!</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                            marginVertical: 2
                        }}>Discover the culture of 54 ethnic groups in Viet Nam.</Text>
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                        }}>Enjoy your tour!</Text>
                    </View>

                    <TouchableOpacity style={{ display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#83829A",
                                                padding: 10,
                                                borderRadius: 10,
                                                width: "95%",
                                                marginTop: 20}} onPress={() => navigation.navigate("/login")}>
                        <Text style={{color: "white",
                                        fontSize: 20,
                                        fontWeight: "bold",}}>Login</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome