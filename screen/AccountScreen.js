import React , { useContext,useState,useEffect }from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from 'firebase'; 
import {StoreContext}from "../stores/index.js";

export default function AccountScreen() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {userState} = useContext(StoreContext);
  const [user,setUser] = userState;

  const storefirebaseauth = () => {
    if(firebase.auth().currentUser.displayName){
    setName(firebase.auth().currentUser.displayName);
    setEmail(firebase.auth().currentUser.email);
    setPassword(firebase.auth().currentUser.password);
    }
  };
  useEffect(()=>{
    storefirebaseauth();
    },[]);

    return (
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.setting}>
          {/* <View style={styles.settingBox}>
              <Text style={styles.settingText}>帳號</Text>
              <Text style={styles.detailText}>{user.email}</Text>
          </View> */}
          <TextInput
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder="帳號"
            placeholderTextColor={'#FF986D'}
            textContentType='name'
            keyboardAppearance='dark'
          />
          <TextInput
            style={styles.input}
            onChangeText={(name) => setName(name)}
            value={name}
            placeholder="名稱"
            placeholderTextColor={'#FF986D'}
            textContentType='name'
            keyboardAppearance='dark'
          />
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            value={password}
            placeholder="密碼"
            placeholderTextColor={'#FF986D'}
            textContentType='password'
            keyboardAppearance='dark'
          />
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  setting:{
    width: 345,
    height: 455,
    backgroundColor: '#FFBB9E',
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  settingBox:{
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FF986D',
    marginLeft: 15,
  },
  detailText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FF986D',
    marginLeft: 40,
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
});