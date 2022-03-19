import React from 'react';
import {View, Text,Image,TouchableOpacity} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from './HomeScreen';
import ReplyScreen from './ReplyScreen';
import TestScreen from './TestScreen';
import UserScreen from './UserScreen';

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
  
export const ReplyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reply"component={ReplyScreen}  
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
    </Stack.Navigator>
  );
  }