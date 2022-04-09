import React from 'react';
import {View, Text,Image,TouchableOpacity} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from './HomeScreen';
import TravelScreen from './TravelScreen';
import TestScreen from './TestScreen';
import UserScreen from './UserScreen';
import QuestionScreen from './QuestionScreen';
import LoginScreen from './LoginScreen';


export const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"component={HomeScreen}  
        options={{
          headerStyle:{
            height:0,
          },
        }} />  
    </Stack.Navigator>
  );
}
  
export const TravelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Travel"component={TravelScreen}  
        options={{
          headerStyle:{
              height:0,
          }
        }} />  
    </Stack.Navigator>
  );
}
  
export const TestStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Test"component={TestScreen}  
      options={{
        headerStyle:{
            height:0,
        }
      }} />  
    <Stack.Screen name="Question" component={QuestionScreen} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    </Stack.Navigator>
  );
}
  
export const UserStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="User"component={UserScreen}  
      options={{
      headerStyle:{
          height:0,
      }
      }} />  
    <Stack.Screen name="Login" component={LoginScreen} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    </Stack.Navigator>
  );
}

export const LoginStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login"component={LoginScreen}  
      options={{
      headerStyle:{
          height:0,
      }
      }} />  
    </Stack.Navigator>
  );
  }