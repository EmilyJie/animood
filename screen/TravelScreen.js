import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import ModalPoup from '../component/ModalPoup';
import { StoreContext } from "../stores";
import ChooseAnimalScreen from './ChooseAnimalScreen';
import ComeBackAnimalScreen from './ComeBackAnimalScreen';

export default function TravelScreen({ navigation }) {
  const {travelState} = useContext(StoreContext);
  const {backState} = useContext(StoreContext);
  const [travelVisible, setTravelVisible] = travelState;
  const [backVisible, setBackVisible] = backState;
  const {chooseState} = useContext(StoreContext);
  const [isChoose, setIsChoose] = chooseState;
  const {otherWorryState} = useContext(StoreContext);
  const [isOther, setIsOther] = otherWorryState;

  const handleOtherWorry = () => {
    navigation.navigate('OthersWorry');
    setIsOther(false);
    setIsChoose(false);
  }
  
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        style={{ position: 'absolute' }}
        source={require('../assets/travel/img_travelBg.png')}
      />
      {isOther ? (
        <View>
          <View style={styles.newVisiter}>
            <Image
              style={{ position: 'absolute', width: 277, height: 110}}
              source={require('../assets/travel/textBg.png')}
            />
            <Text style={styles.visiterText}>嗨！很高興認識你{"\n"}點我看看我主人的煩惱吧</Text>
          </View>
          <TouchableOpacity onPress={handleOtherWorry}>
            <Image
              style={{ position: 'absolute', width: 145, height: 109.65, top:290, left: 35 }}
              source={require('../assets/animals/racoon.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
      <ModalPoup visible={travelVisible}>
        <ChooseAnimalScreen></ChooseAnimalScreen>
        <TouchableOpacity onPress={() => setTravelVisible(false)}>
          <Image source={require('../assets/btn_back.png')} style={styles.btnBack}/>
        </TouchableOpacity>
      </ModalPoup>
      {isChoose ? (
        <View style={styles.btnTravel}>
          <Text style={styles.timeText}>倒數2天</Text>
        </View>
      ) : (
        <TouchableOpacity 
          style={styles.btnTravel}
          onPress={() => setTravelVisible(true)}
        >
          <Text style={styles.btnText}>去旅行！</Text>
        </TouchableOpacity>
      )}
      <ModalPoup visible={backVisible}>
        <ComeBackAnimalScreen></ComeBackAnimalScreen>
        <TouchableOpacity onPress={() => setBackVisible(false)}>
          <Image source={require('../assets/btn_back.png')} style={styles.btnBack}/>
        </TouchableOpacity>
      </ModalPoup>
      <TouchableOpacity onPress={() => setBackVisible(true)}>
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
  newVisiter:{
    top: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visiterText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#702929',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 5
  },
  btnTravel:{
    width: 130,
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
    marginTop: 650,
  },
  btnText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  timeText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#EDD2D2'
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