import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image,Alert,Picker} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, Icons } from '../../constants';


function Register() {
    const [ agree, setAgree] = useState(false);
    
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const Submit = () =>{
        if (email === "" || password === "" || name === "" || age === "" || gender === "") {
            setAgree(false);
        } else {
            setAgree(true)
            navigation.navigate("../login");
        }
    }
    const handleLogin = () => {
        navigation.navigate('../login')
    }
    console.log(gender)

  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Register Form</Text>
        <Text style={styles.para}>Register and discover museum</Text>

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
                  bottom: 30,
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

        <View>
            <TextInput style={styles.lableInput} value={name}
            onChangeText={(nameData) => {
                setName(nameData);
            }} autoCapitalize='none' autoCorrect={false}
            placeholder='Enter your name' 
            placeholderTextColor='#7d7d7d' />
        </View>
        <View>
            <TextInput style={styles.lableInput} value={age}
            onChangeText={(ageData) => {
                setAge(ageData);
            }} autoCapitalize='none' autoCorrect={false}
            placeholder='Enter your age' 
            placeholderTextColor='#7d7d7d' />
        </View>
        
        <View style={styles.container}>
          <Picker
            onValueChange={(itemValue, itemIndex) => setGender(itemValue.lowerCase())}
            style={styles.picker}
          >
            <Picker.Item  label="Male" value="Male" style={styles.pickerItem}/>
            <Picker.Item  label="Female" value="Female" style={styles.pickerItem}/>
            <Picker.Item  label="Other" value="Other" style={styles.pickerItem} />
          </Picker>
        </View>
        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:"#e58a2e"}]} disabled={agree} onPress={Submit}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
        <Text style={styles.forgotStyle} onPress={handleLogin}>
            <Text style={{color:"gray", fontSize:17}}>Already member?</Text>
            Sign In
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
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
        color: "#7d7d7d",
        paddingBottom: 30,
        lineHeight: 25,
    },
    lableInput: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "#EEEDF1",
        borderRadius: 10,
        width: 350,
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
        width: 350,
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
        paddingTop: 30,
        textAlign: "center",
    },
    container: {
      marginBottom: 30,
      fontSize: 18,
    },
    picker: {
      paddingLeft: 20,
      width: 200,
      height: 50,
      backgroundColor: '#EEEDF1',
      borderRadius: 8,
      fontSize: 16,
    },
    pickerItem: {
      color: 'red',
      fontSize: 18, 
      textAlign: 'center',
    },
})
export default Register