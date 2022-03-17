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
      <TouchableOpacity style={styles.btnTravel}>
        <Text style={styles.btnText}>去旅行！</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnTravel:{
    width: 125,
    height: 60,
    backgroundColor: '#F95A5A',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 680,
  },
  btnText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  }
});