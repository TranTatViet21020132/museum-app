// LoginScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      {/* Your login UI here */}
      <Button
        title="Login"
        onPress={() => {
          // Perform authentication here. If successful, navigate to the home screen.
          navigation.navigate('homes');
        }}
      />
    </View>
  );
};

export default LoginScreen;
