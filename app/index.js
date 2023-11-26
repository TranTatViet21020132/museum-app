// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export default function Index() {
    const [isLogin, setIsLogin] = useState(false);
    const setLogin = async () => {
        try{
            const value = await AsyncStorage.getItem("user-id");
            if(value !== undefined || value !== null) {
                setIsLogin(!isLogin);
            }
        }catch(error) {
            console.error(error)
        }
    }
    useEffect(() => setLogin(), [])
   
    return isLogin ? <Redirect href="/main/home" /> : <Redirect href="/login" />;
}