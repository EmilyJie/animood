import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [account, onChangeAccount] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animood</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccount}
            value={account}
            placeholder="帳號"
            placeholderTextColor={'#FF986D'}
            textContentType='username'
            keyboardAppearance='dark'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="密碼"
            placeholderTextColor={'#FF986D'}
            textContentType='password'
            keyboardAppearance='dark'
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={{width: 280, alignItems: 'flex-end', marginBottom: 5}}>
            <Text style={styles.forget}>忘記密碼？</Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.btnText}>登入</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUp}>
            <Text style={styles.btnText}>註冊</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFBB9E',
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
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFF9F7',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#FF986D',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
  forget: {
    fontSize: 14,
    fontWeight:"bold",
    color: '#FFFFFF',
    textDecorationLine: 'underline'
  },
  btn: {
    width: 285,
    marginTop: 10,
    alignItems: 'center',
  },
  login: {
    width: 125,
    height: 60,
    backgroundColor: '#F95A5A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginBottom: 15,
  },
  signUp: {
    width: 125,
    height: 60,
    backgroundColor: '#FF7D3C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  btnText: {
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  }
});