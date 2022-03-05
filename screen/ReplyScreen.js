import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function ReplyScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        style={{ position: 'absolute' }}
        source={require('../assets/reply/img_replyBg.png')}
      />
      <Image
        style={{ position: 'absolute', width: 145, height: 109.65 }}
        source={require('../assets/animals/racoon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});