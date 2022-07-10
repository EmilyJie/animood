import React, { useRef, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StoreContext } from "../stores";
import LottieView from 'lottie-react-native'

export default function MoodScreen({ navigation }) {
  const {moodState} = useContext(StoreContext);
  const [isMood, setIsMood] = moodState;

  const handlePress = (mood) => {
    setIsMood(mood);
    if(isMood)
      navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Image style={styles.textBg} source={require('../assets/img_moodTextBg.png')}/>
        <Text style={styles.text}>你今天的心情如何呢？</Text>
      </View>
      <LottieView source={require('../json/racoon.json')} autoPlay loop style={{width: 240}}/>
      <View style={styles.moodContainer}>
        <TouchableOpacity style={styles.moodBg} onPress={() => handlePress("happy")}>
          <Image style={{width: 60, height: 60}} source={require('../assets/mood/happy_face.png')}/>
          <Text style={styles.moodText}>開心</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moodBg} onPress={() => handlePress("normal")}>
          <Image style={{width: 60, height: 40, marginBottom: 8}} source={require('../assets/mood/normal_face.png')}/>
          <Text style={styles.moodText}>一般</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moodBg} onPress={() => handlePress("angry")}>
          <Image style={{width: 57, height: 52, marginBottom: -4}} source={require('../assets/mood/angry_face.png')}/>
          <Text style={styles.moodText}>憤怒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moodBg} onPress={() => handlePress("sad")}>
          <Image style={{width: 55, height: 47}} source={require('../assets/mood/sad_face.png')}/>
          <Text style={styles.moodText}>難過</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFEBC3',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  textBg:{
    width: 280,
    height: 200
  },
  text:{
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "#521111",
    top: 75,
    left: 45
  },
  racoon:{
    marginTop: 10,
  },
  moodContainer:{
    display: "flex", 
    flexDirection: "row", 
    width: 375, 
    justifyContent: "space-between", 
    alignItems: "center",
    marginTop: 50
  },
  moodBg:{
    width: 85,
    height: 130,
    backgroundColor: "#FFFAEE",
    borderRadius: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 25
  },
  moodText:{
    fontSize: 16,
    color: "#521111",
    marginTop: 15
  },
});