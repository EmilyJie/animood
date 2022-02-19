import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{ ...props.style, opacity: fadeAnim, }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function TransitionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FadeInView>
        <Text style={styles.text}>先來做個小測驗吧！</Text>
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
  text:{
    fontSize: 26,
    fontWeight:"bold",
    color: '#FFFFFF',
  },
});