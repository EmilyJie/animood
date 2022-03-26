import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [account, onChangeAccount] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAccount}
          value={account}
          placeholder="帳號"
          placeholderTextColor={'#D2A98D'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="密碼"
          placeholderTextColor={'#D2A98D'}
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
    backgroundColor:'#FFEBC3',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  logo:{
    width: 337.62,
    height: 55.0,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#FFF9F6',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#BDA684',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
  forget: {
    fontSize: 14,
    fontWeight:"bold",
    color: '#F0B28B',
    textDecorationLine: 'underline'
  },
  btn: {
    width: 285,
    marginTop: 20,
    alignItems: 'center',
  },
  login: {
    width: 125,
    height: 60,
    backgroundColor: '#EEA970',
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
    backgroundColor: '#D2A98D',
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