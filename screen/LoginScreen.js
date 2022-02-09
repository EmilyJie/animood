import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [account, onChangeaccount] = React.useState(null);
  const [password, onChangepassword] = React.useState(null);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animood</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeaccount}
          value={account}
          placeholder="帳號"
          placeholderTextColor={'#FF986D'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangepassword}
          value={password}
          placeholder="密碼"
          placeholderTextColor={'#FF986D'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFC5AD',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  title:{
    fontSize: 80,
    fontWeight:"bold",
    lineHeight: 94,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  input: {
    backgroundColor: '#FFF9F7',
    height: 45,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#FF986D',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
});