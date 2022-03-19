import React, { useContext, useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigation/MainTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen } from 'expo';
//import { Provider as StoreProvider } from 'react-redux';
//import { StoreProvider, StoreContext } from "./store/UserStore";

const PERSISTENCE_KEY = "NAVIGATION_STATE";

export default App = ()=> {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    
      return (
        <NavigationContainer
          initialState={initialNavigationState}
        >
          <MainTab />
        </NavigationContainer>
      )
    

  }
}

// export default () => {
//   return (
//     <StoreProvider>
//       <App />
//     </StoreProvider>
//   )
// };