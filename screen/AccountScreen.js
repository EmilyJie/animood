import React , { useContext,useState,useEffect }from 'react';
import { StyleSheet, Image, TextInput, View, TouchableWithoutFeedback, TouchableOpacity,KeyboardAvoidingView, Keyboard } from 'react-native';
import * as firebase from 'firebase'; 
import {StoreContext}from "../stores/index.js";
import { handleAvatar } from '../component/HandleAvatar.js';

export default function AccountScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {userState , userAvatarState} = useContext(StoreContext);
  const [user,setUser] = userState;
  const [userAvatar, setUserAvatar] = userAvatarState;

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
      <View style={styles.container}>
        <Image 
          style={{ position: 'absolute' ,flex: 1 }}
          source={require('../assets/gif/bg_gif.gif')}
        />
        <View style={styles.photoBg}>
          {handleAvatar(userAvatar)}
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{marginTop: 20}}>
            <TextInput
              style={styles.input}
              onChangeText={(email) => setEmail(email)}
              value={email}
              placeholder="帳號"
              placeholderTextColor={'#D2A98D'}
              textContentType='email'
              keyboardAppearance='dark'
            />
            <TextInput
              style={styles.input}
              onChangeText={(name) => setName(name)}
              value={name}
              placeholder="名稱"
              placeholderTextColor={'#D2A98D'}
              textContentType='name'
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
            />
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
              <Image source={require('../assets/user/btn_sent.png')} style={styles.btnSent}/>
            </TouchableOpacity> 
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    width:415,
    height:896,
  },
  photoBg:{
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  profilePhoto:{
    width: 100,
    height: 100,
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: '#FFFAEE',
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
    color:'#D2A98D'
  },
  btnSent:{
    width: 50,
    height: 50,
    marginTop: 50,
    marginLeft: 125,
  }
});