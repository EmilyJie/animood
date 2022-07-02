import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { StoreContext } from "../stores";

export default function HomeScreen({ navigation }) {
  const {moodState} = useContext(StoreContext);
  const [isMood, setIsMood] = moodState;

  const handleBackground = () => {
    if(isMood == "happy"){
      return(
        <LottieView source={require('../json/bg_happy.json')} autoPlay loop/>
      )
    }
    else if(isMood == "normal"){
      return(
        <LottieView source={require('../json/bg_normal.json')} autoPlay loop/>
      )
    }
    else if(isMood == "angry"){
      return(
        <LottieView source={require('../json/bg_angry.json')} autoPlay loop/>
      )
    }
    else if(isMood == "sad"){
      return(
        <LottieView source={require('../json/bg_sad.json')} autoPlay loop/>
      )
    }
  }

  const handleMood = () => {
    if(isMood == "happy"){
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
          <Image style={styles.icon_mood} source={require('../assets/home/icon_happy.png')}/>
        </TouchableOpacity>
      )
    }
    else if(isMood == "normal"){
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
          <Image style={styles.icon_mood} source={require('../assets/home/icon_normal.png')}/>
        </TouchableOpacity>
      )
    }
    else if(isMood == "angry"){
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
          <Image style={styles.icon_mood} source={require('../assets/home/icon_angry.png')}/>
        </TouchableOpacity>
      )
    }
    else if(isMood == "sad"){
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
          <Image style={styles.icon_mood} source={require('../assets/home/icon_sad.png')}/>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={{flex:1}}>
      <View style={{alignItems:'center', height: 896}}>
        {/* <Image style={styles.home_bg} source={require('../assets/gif/bg_gif.gif')}/>  */}
        {handleBackground()}
        {handleMood()}
        <View style={styles.allWorreis}>
          <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>    
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/panda_circle.png')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('WorryUpdate')}>
                <Image
                  style={styles.faceGifStyle}
                  source={require('../assets/animals/pig_circle.png')}
                />
              </TouchableOpacity>
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/animals/crocodile_circle.png')}
              />
          </Animated.ScrollView>
          <View style={styles.worry_bg}>
            <Text style={styles.worryText}>最近沒有錢</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Worry')}>
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
  icon_mood:{
    width: 145,
    height: 51,
    marginTop: 90,
    marginLeft: -180,
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