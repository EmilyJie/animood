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

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {userState} = useContext(StoreContext);
  const [user,setUser] = userState;

  const saveToAsyncStorage = () => {
      try{
          AsyncStorage.setItem(ME_PERSISTENCE_KEY,JSON.stringify(user));
          AsyncStorage.setItem(HAS_SET_KEY,JSON.stringify(true));
      }catch(e){}
  };

  useEffect(()=>{
      saveToAsyncStorage();
  },[user]);

  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;


  const isignInsaveToAsyncStorage = () => {
      try{
          AsyncStorage.setItem(SIGN_PERSISTENCE_KEY,JSON.stringify(true));
          AsyncStorage.setItem(SIGN_HAS_SET_KEY.stringify(true));
      }catch(e){}
  };

  useEffect(()=>{
      isignInsaveToAsyncStorage();
  },[isLogin]);


  const renderButton = () => {
      return loading ? (
        <ActivityIndicator size="large" color="#F0A202"  />
      ) : (
          // <Button
          //     buttonStyle={{
          //         backgroundColor:"#F0A202",
          //         borderRadius:22
          //     }}
              
          //     title="註冊"
              
          //     style={{borderRadius:22}}
          //     />
          <TouchableOpacity onPress={onSignUp} 
          //onPress={() => navigation.navigate('Transition')}
          >
            <Image style={styles.btnSent} source={require('../assets/btn_sent.png')}/>
          </TouchableOpacity>
      );
    };

    const onSignUp = async () => {
      setError(" ");
      setLoading(true);
      try {
          
        await firebase.auth().createUserWithEmailAndPassword(user.email, password);
        await firebase.auth().signInWithEmailAndPassword(user.email, password);
        await firebase.auth().currentUser.updateProfile({
            displayName:name
        })

        setUser({...user,name:firebase.auth().currentUser.displayName})
        setUser({...user,email:firebase.auth().currentUser.email})
        console.log(`signup email=${user.email}`);

        console.log(`signup username=${user.name}`);
      
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        setIsLogin(true);
        
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
      <View style={styles.photoSelection}>
        <TouchableOpacity>
          <Image style={styles.profliePhoto} source={require('../assets/img_head1.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.profliePhoto} source={require('../assets/img_head2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.profliePhoto} source={require('../assets/img_head3.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.profliePhoto} source={require('../assets/img_head4.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="名稱"
          placeholderTextColor={'#D2A98D'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={(email) => setUser({...user,email})}
          value={email}
          placeholder="帳號"
          placeholderTextColor={'#D2A98D'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
          placeholder="密碼"
          placeholderTextColor={'#D2A98D'}
          textContentType='password'
          keyboardAppearance='dark'
          secureTextEntry={true}
        />
      </View>
      {renderButton()}
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
    marginTop: 120,
  },
  photoSelection:{
    width: 285,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  profliePhoto:{
    width: 60,
    height: 60,
  },
  inputContainer:{
    marginTop: 10,
  },
  input:{
    backgroundColor: '#FFF9F6',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#D2A98D',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
    color:'#D2A98D'
  },
  forget:{
    fontSize: 14,
    fontWeight:"bold",
    color: '#FFFFFF',
    textDecorationLine: 'underline'
  },
  btnSent:{
    width: 45,
    height: 45,
    marginTop: 20
  }
});