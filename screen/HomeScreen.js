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
        <View style={styles.allWorreis}>
          <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>    
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/panda_circle.png')}
              />
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/pig_circle.png')}
              />
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/crocodile_circle.png')}
              />
          </Animated.ScrollView>
          <View style={styles.worry_bg}>
            <Text style={styles.worryText}>最近沒有錢</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.btnAdd}
            source={require('../assets/home/btn_add.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allWorreis:{
    marginTop: 120,
    height: 400,
    alignItems: 'center',
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
  faceGifStyle:{
    width: 260,
    height: 260,
    marginLeft:10
  },
  worry_bg:{
    width: 230,
    height: 50,
    backgroundColor: '#FFFAEE',
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
    marginBottom: 30,
  },
  worryText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#702929'
  },
  btnAdd:{
    width: 60,
    height: 60,
    marginTop: 70,
    marginLeft: 315
  },
});