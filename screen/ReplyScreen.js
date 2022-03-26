import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import ModalPoup from '../component/ModalPoup';

const TravelModal = () => {
  return(
    <View style={styles.travelBg}>
      <Text style={styles.title}>想帶誰去旅行呢？</Text>
      <View style={styles.animalsContainer}>
        <TouchableOpacity style={styles.animalBg}>
          <Image
            style={styles.animal}
            source={require('../assets/animals/panda.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.animalBg}>
          <Image
            style={styles.animal}
            source={require('../assets/animals/pig.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.animalBg}>
          <Image
            style={styles.animal}
            source={require('../assets/animals/cat.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.animalBg}>
          <Image
            style={styles.animal}
            source={require('../assets/animals/crocodile.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function ReplyScreen({ navigation }) {
  const [travelVisible, setTravelVisible] = React.useState(false);
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        style={{ position: 'absolute' }}
        source={require('../assets/reply/img_replyBg.png')}
      />
      <Image
        style={{ position: 'absolute', width: 145, height: 109.65 }}
        source={require('../assets/animals/racoon.png')}
      />
      <ModalPoup visible={travelVisible}>
        <TravelModal></TravelModal>
      </ModalPoup>
      <TouchableOpacity style={styles.btnRecord} onPress={() => setTravelVisible(true)}>
        <Text style={styles.recordText}>冒險紀錄</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnTravel}>
        <Text style={styles.btnText}>去旅行！</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRecord:{
    width: 120,
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
    marginTop: 50,
    marginLeft: 240,
  },
  recordText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#702929'
  },
  btnTravel:{
    width: 125,
    height: 60,
    backgroundColor: '#FE9A7B',
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
    marginTop: 580,
  },
  btnText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  travelBg:{
    backgroundColor: '#FFFAEE',
    width: 360,
    height: 555,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight:"bold",
    color: '#702929',
    marginTop: 50,
  },
  animalsContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  animalBg:{
    width: 95,
    height: 95,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#702929',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  animal:{
    width: '85%',
    height: '70%',
    overflow: 'visible',
  },
});