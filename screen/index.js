import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ReplyScreen from './ReplyScreen';
import TestScreen from './TestScreen';
import PersonScreen from './PersonScreen';

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
  
export const PersonStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Person"component={PersonScreen}  
      options={{
      headerStyle:{
          height:0,
      }
      }} />  
    </Stack.Navigator>
  );
  }