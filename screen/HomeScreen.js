import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#FFFFFF', alignItems:'center', height: 815}}>
        <View style={styles.allGoal}>
          <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.goal_bg}>
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/faceGif/faceIcon_box.gif')}
              />
              <ProgressBar progress={0.2} style={styles.probarStyle} color={'#63CFA8'}/>
              <Text style={styles.probarText}>4/20</Text>
            </View>
            <View style={styles.goal_bg}>
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/faceGif/faceIcon_cup.gif')}
              />
              <ProgressBar progress={0.8} style={styles.probarStyle} color={'#63CFA8'}/>
              <Text style={styles.probarText}>8/10</Text>
            </View>
            <View style={styles.goal_bg}>
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/faceGif/faceIcon_chopstick.gif')}
              />
              <ProgressBar progress={0.5} style={styles.probarStyle} color={'#63CFA8'}/>
              <Text style={styles.probarText}>5/10</Text>
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allGoal:{
    marginTop: 250,
    height: 400,
  },
  goal_bg:{
    width: 300,
    height: 400,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10,
  },
  faceGifStyle:{
    width: 330,
    height: 330,
    marginTop: -35,
  },
  probarStyle:{
    width: 190,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    backgroundColor: "#E7FFF6",
    marginTop: -10,
  },
  probarText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A9F7A',
    marginTop: 20,
  },
});