import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import ModalPoup from '../component/ModalPoup';
import ChooseAnimalScreen from './ChooseAnimalScreen';

export default function TravelScreen({ navigation }) {
  const [travelVisible, setTravelVisible] = React.useState(false);
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        style={{ position: 'absolute' }}
        source={require('../assets/travel/img_travelBg.png')}
      />
      <Image
        style={{ position: 'absolute', width: 145, height: 109.65 }}
        source={require('../assets/animals/racoon.png')}
      />
      <ModalPoup visible={travelVisible}>
        <ChooseAnimalScreen></ChooseAnimalScreen>
        <TouchableOpacity onPress={() => setTravelVisible(false)}>
          <Image source={require('../assets/btn_back.png')} style={styles.btnBack}/>
        </TouchableOpacity>
      </ModalPoup>
      <TouchableOpacity 
        style={styles.btnTravel}
        onPress={() => setTravelVisible(true)}
      >
        <Text style={styles.btnText}>去旅行！</Text>
      </TouchableOpacity>
      <TouchableOpacity /*onPress={reply_btn_travel}*/>
        <Image
          style={styles.btnRecord} 
          source={require('../assets/travel/btnRecord.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRecord:{
    width: 70,
    height: 70,
    marginTop: -60,
    marginLeft: 300,
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
    marginTop: 700,
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
  btnBack:{
    width: 15,
    height: 28.3,
    marginTop: -510,
    marginLeft: 30,
  }
});