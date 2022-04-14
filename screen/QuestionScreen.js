import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import {Button} from "react-native-elements";
import { ProgressBar } from 'react-native-paper';
import test from '../json/test.json'

export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={require('../assets/btn_back.png')} />
      </TouchableOpacity>
      
      <View style={styles.numberBg}>
        <Text style={styles.number}>{test.num}</Text>
      </View>
      <View style={styles.questionBg}>
        <Text style={styles.questionText}>{test.question}</Text>
      </View>
      <View style={styles.optionBox}>
        <Button 
          buttonStyle={{
            width: 285,
            height: 60,
            backgroundColor: '#FFFAEE',
            borderColor: '#F1A673',
            borderRadius:20,
            borderWidth: 3,
            marginTop: 20,
          }}
          title="沒有或極少(每周1天以下)" 
          titleStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F1A673'}}/>
        <Button 
          buttonStyle={{
            width: 285,
            height: 60,
            backgroundColor: '#FFFAEE',
            borderColor: '#F1A673',
            borderRadius:20,
            borderWidth: 3,
            marginTop: 20,
          }}
          title="有時候(每周1-2天)" 
          titleStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F1A673'}}/>
        <Button 
          buttonStyle={{
            width: 285,
            height: 60,
            backgroundColor: '#FFFAEE',
            borderColor: '#F1A673',
            borderRadius:20,
            borderWidth: 3,
            marginTop: 20,
          }}
          title="時常(每周3-4天)" 
          titleStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F1A673'}}/>
        <Button 
          buttonStyle={{
            width: 285,
            height: 60,
            backgroundColor: '#FFFAEE',
            borderColor: '#F1A673',
            borderRadius:20,
            borderWidth: 3,
            marginTop: 20,
          }}
          title="常常或總是(每周5-7天)" 
          titleStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F1A673'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:414,
    height:896,
    backgroundColor: '#FFEBC3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    marginRight:350,
    marginBottom:50,
    marginTop:-50,
  },
  numberBg:{
    width: 75,
    height: 75,
    backgroundColor: '#F1A673',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -40,
    marginRight: 280,
    zIndex: 1
  },
  number:{
    fontSize: 24,
    fontWeight:"bold",
    color: '#FFFAEE'
  },
  questionBg:{
    width: 315,
    height: 205,
    borderColor: '#F1A673',
    backgroundColor: '#FFFAEE',
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText:{
    fontSize: 24,
    fontWeight:"bold",
    color: '#F1A673'
  },
  optionBox:{
    marginTop: 40
  },
  option:{
    width: 285,
    height: 60,
    borderColor: '#F1A673',
    backgroundColor: '#FFFAEE',
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  optionText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F1A673'
  }
});