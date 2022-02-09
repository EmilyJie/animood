import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#FFC5AD', alignItems:'center', height: 845}}>
        <Text style={styles.titleText}>垃圾量目標</Text>
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
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-80
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#707070',
    marginTop: 100,
  },
  profileiconStyle:{
    width:50,
    height:50,
    marginLeft:290,
    marginTop:-90
  },
  text:{
    marginVertical:15,
    fontSize:24,
    fontWeight:'bold',
    color: '#909090'
  },
  downbtn:{
    marginLeft:60,
    marginTop:-35
  },
  touchableOpacity:{
    backgroundColor:'#E2E2E2',
    alignSelf:'stretch',
    paddingHorizontal:10,
    marginHorizontal:20,
    width:100,
    height:60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  picker:{
    width: 100,
    height: 58,
    backgroundColor:'#E2E2E2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  allGoal: {
    marginTop: 20,
    height: 550,
  },
  goal_bg: {
    width: 300,
    height: 470,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10,
  },
  faceGifStyle: {
    width: 330,
    height: 330,
    marginTop: 20,
  },
  probarStyle: {
    width: 190,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    backgroundColor: "#E7FFF6",
    marginTop: -10,
  },
  probarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A9F7A',
    marginTop: 20,
  },
  btn_addgoal: {
    width:170,
    height:45,
    backgroundColor: '#FF867C',
    borderRadius: 20,
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addgoalText:{
    fontSize:20,
    fontWeight:"bold",
    color: '#fff',
  },
  header_bg:{
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#FFFFFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  panel: {
    height: 580,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  panelContent: {
    marginTop: 15,
    flexDirection: 'row',
  },
  faceIcon: {
    marginTop: 20,
    height: 190,
    width: 190,
  },
  iconstyle: {
    margin: 12,
    height: 70,
    width: 45,
  },
  btncheck:{
    width:34,
    height:33,
    marginTop: 10,
    left: 10
  },
  qtyBlock:{
    flexDirection: 'row',
    width:240,
    height:50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  qtyText:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
    marginRight: 15,
    marginLeft: 15
  },
  btnQty: {
    color: '#909090',
    fontSize: 22,
    fontWeight:"bold",
  },
  qty_bg:{
    width:70,
    height:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
  },
  btnCheck:{
    width: 42,
    height: 32,
    marginTop: 15,
  },
});