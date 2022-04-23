import React, { useState,useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import test from '../json/test.json'

export default function QuestionDetail({ navigation }) {
    return(
        <View style={styles.container}> 
            <View style={styles.numberBg}>
                <Text style={styles.number}>{test.num}</Text>
            </View>
            <View style={styles.questionBg}>
                <Text style={styles.questionText}>{test.question}</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
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
    }
});