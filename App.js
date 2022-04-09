import React, { useContext, useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigation/MainTab';
import * as firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeStack,LoginStack} from "./screen/index"
import { StoreProvider, StoreContext } from "./stores/index.js";

const PERSISTENCE_KEY = "NAVIGATION_STATE";
const SIGN_PERSISTENCE_KEY = "SIGN_PERSISTENCE_KEY";
const SIGN_HAS_SET_KEY = "SIGN_HAS_SET_KEY";

const App=()=> {

  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;

  const [isLoadingComplete,setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  useEffect(()=>{
    const firebaseConfig = {
      apiKey: "AIzaSyAXE_MTC98TlksEoWcwWEplNhsI8mnCw7A",
      authDomain: "animood-421e6.firebaseapp.com",
      databaseURL: "https://animood-421e6.firebaseio.com",
      projectId: "animood-421e6",
      storageBucket: "animood-421e6.appspot.com",
      messagingSenderId: "619825712491",
      appId: "1:619825712491:web:8fb4791d90d761555cd02e",
      measurementId: "G-DGJ69FDFMB"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig); //避免firbase重複初始化
    }
    console.log(`firebase`);
  },[]);

  React.useEffect(()=>{
    async function loadResourceAndDataAsync(){
      try{
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      }catch(e){
        console.warn(e);
      }finally{
        setLoadingComplete(true);

      }
    }
    loadResourceAndDataAsync();
  },[]);

  if (!isLoadingComplete) {
    return null;
  } else {
    
    return isLogin ?(
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    ):(
      <NavigationContainer>
        <LoginStack/>
      </NavigationContainer>
    );
  }
}

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
};