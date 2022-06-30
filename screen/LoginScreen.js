import React, { useContext,useState,useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, 
  ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "react-native-elements";
import * as firebase from 'firebase'; 
import {StoreContext}from "../stores/index.js";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const SIGN_PERSISTENCE_KEY = "SIGN_PERSISTENCE_KEY";
const SIGN_HAS_SET_KEY = "SIGN_HAS_SET_KEY";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;

  const [loading, setLoading] = useState(false);

  const {userState} = useContext(StoreContext);
  const [user,setUser] = userState;

  const saveToAsyncStorage = () => {
      try{
          AsyncStorage.setItem(ME_PERSISTENCE_KEY,JSON.stringify(user));
          AsyncStorage.setItem(HAS_SET_KEY,JSON.stringify(true));
          console.log(`sign user`);
      }catch(e){}
  };

  const isignInsaveToAsyncStorage = () => {
      try{
          AsyncStorage.setItem(SIGN_PERSISTENCE_KEY,JSON.stringify(true));
          AsyncStorage.setItem(SIGN_HAS_SET_KEY.stringify(true));     
      }catch(e){}
      console.log(`signin isLogin=${isLogin}`);
  };
  useEffect(()=>{
      isignInsaveToAsyncStorage();
  },[isLogin]);

  useEffect(()=>{
      saveToAsyncStorage();
  },[user]);

  const renderButton = () => {
    return loading ? (
      <ActivityIndicator size="large" color="#F0A202"  />
    ) : (
      <Button
        buttonStyle={{
          width: 285,
          height: 60,
          backgroundColor: '#FE9A7B',
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
        }}  
        title="登入"
        titleStyle={{fontWeight: "bold"}}
        onPress={onSignIn}
        //onPress={() => navigation.navigate('Home')} 
        style={{borderRadius:20}}
        />
    );
  };

  const onSignIn = async () => {
    setError(" ");
    setLoading(true);
    try {
      
      await firebase.auth().signInWithEmailAndPassword(email, password);
      
      setName(firebase.auth().currentUser.displayName);
      setEmail(firebase.auth().currentUser.email);
      console.log(`signin name=${name}`);
      console.log(`signin email=${email}`);
      setUser({...user,email})
      setUser({...user,name})
      
      setEmail("");
      setPassword("");
      setError("");
      setIsLogin(true);
      isignInsaveToAsyncStorage();
    } catch (err1) {
        setError(err1.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="帳號"
          placeholderTextColor={'#C9C9C9'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="密碼"
          placeholderTextColor={'#C9C9C9'}
          textContentType='password'
          keyboardAppearance='dark'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={{width: 280, alignItems: 'flex-end', marginBottom: 5}}>
          <Text style={styles.forget}>忘記密碼？</Text>
      </TouchableOpacity>
      <View style={styles.btn}>
        {renderButton()}
        <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('Mood')}>
          <Text style={styles.btnText}>註冊</Text>
        </TouchableOpacity>
      </View>
      </View>
     </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
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
    height: 60,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#BDA684',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D'
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
    width: 285,
    height: 60,
    backgroundColor: '#FFFAEE',
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
    color: '#D2A98D',
  }
});