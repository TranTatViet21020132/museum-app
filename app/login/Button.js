import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../constants'

const Button = () => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
            }}
            onPress={() => navigation.navigate("home")}
        >
            <Text>Login</Text>
        </TouchableOpacity>
    )
}
    
const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.background,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button