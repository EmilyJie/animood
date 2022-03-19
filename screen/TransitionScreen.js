import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import FadeInView from "../component/FadeInView";

export default function TransitionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FadeInView>
        <View style={styles.box}>
          <Text style={styles.text}>先來做個小測驗吧！</Text>
        </View>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFBB9E',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  box:{
    width: 295,
    height: 175,
    backgroundColor: '#FFFAEE',
    borderColor: '#FF986D',
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 26,
    fontWeight:"bold",
    color: '#FF986D',
  },
});