import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.numberBg}>
        <Text style={styles.number}>Q1</Text>
      </View>
      <View style={styles.questionBg}>
        <Text style={styles.questionText}>我睡不好</Text>
      </View>
      <View style={styles.optionBox}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>沒有或極少(每周1天以下)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>有時候(每周1-2天)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>時常(每周3-4天)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>常常或總是(每周5-7天)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:415,
    height:896,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberBg:{
    width: 75,
    height: 75,
    backgroundColor: '#F95A5A',
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
    color: '#FFFFFF'
  },
  questionBg:{
    width: 315,
    height: 205,
    borderColor: '#F95A5A',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText:{
    fontSize: 24,
    fontWeight:"bold",
    color: '#F95A5A'
  },
  optionBox:{
    marginTop: 40
  },
  option:{
    width: 285,
    height: 60,
    borderColor: '#F95A5A',
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  optionText:{
    fontSize: 20,
    color: '#F95A5A'
  }
});