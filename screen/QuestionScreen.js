import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.questionBg}>
        <Text>我睡不好</Text>
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
    alignItems: 'center',
    width:415,
    height:896,
    backgroundColor: '#FFFFFF'
  },
  questionBg:{

  },
  optionBox:{

  },
});