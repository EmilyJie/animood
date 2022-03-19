import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#FFF4B9', alignItems:'center', height: 896}}>
      <Image style={styles.home_bg} source={require('../assets/gif/bg_happy.gif')}/> 
        <Image style={styles.icon_happy} source={require('../assets/home/icon_happy.png')}/>
        <View style={styles.allGoal}>
          <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
              <Image
                style={styles.faceGifStyle1}
                source={require('../assets/animals/panda.png')}
              />
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/pig.png')}
              />
              <Image
                style={styles.faceGifStyle2}
                source={require('../assets/animals/crocodile.png')}
              />
            
          </Animated.ScrollView>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allGoal:{
    marginTop: 280,
    height: 400,
  },
  home_bg:{
    zIndex:0,
    position: 'absolute' ,
    flex: 1
  },
  icon_happy:{
    width: 145,
    height: 51,
    marginTop: 90,
    marginLeft: -220,
    zIndex:10
  },
  // goal_bg:{
  //   width: 280,
  //   height: 250,
  //   alignItems:'center',
  //   marginLeft: 5,
  //   marginRight: 5,
  // },
  faceGifStyle:{
    width: 240,
    height: 195,
    marginLeft:10
  },
  faceGifStyle1:{
    width: 132,
    height: 114,
    marginTop:70
  },
  faceGifStyle2:{
    width: 144,
    height: 105,
    marginTop:80,
    marginLeft:10
  },
  
});