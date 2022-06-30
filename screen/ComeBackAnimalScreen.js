import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import ModalPoup from '../component/ModalPoup';
import { StoreContext } from '../stores';

export default function ComeBackAnimalScreen({ navigation }) {
  const {chooseState} = useContext(StoreContext);
  const [isChoose, setIsChoose] = chooseState;
  const {otherWorryState} = useContext(StoreContext);
  const [isOther, setIsOther] = otherWorryState;

  const handleBackWorry = () => {
    navigation.navigate('BackWorry');
    setIsOther(false);
    setIsChoose(false);
  }

  return(
    <View style={styles.travelBg}>
      <Text style={styles.title}>看看旅行回來的小動物們！</Text>
      <View style={styles.animalsContainer}>
        <TouchableOpacity 
          style={styles.animalBg}
          onPress={handleBackWorry}
        >
          <Image
            style={styles.animal}
            source={require('../assets/animals/panda.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.animalBg}
        >
          <Image
            style={styles.animal}
            source={require('../assets/animals/pig.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.animalBg}
        >
          <Image
            style={styles.animal}
            source={require('../assets/animals/cat.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.animalBg}
        >
          <Image
            style={styles.animal}
            source={require('../assets/animals/crocodile.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  goAnimal:{
    width: '45%',
    height: '25%',
    marginTop: 50,
  },
  input: {
    width: 280,
    height: 50,
    backgroundColor: '#FFE8B0',
    borderRadius: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 70,
    fontSize: 18,
    fontWeight:"bold",
  },
  btnEntry:{
    width: 16,
    height: 28.37,
    position: 'relative',
    marginTop: -38,
    marginLeft: 220,
    resizeMode: 'stretch'
  },
  btnTravel:{
    width: 100,
    height: 50,
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
    marginTop: 40,
  },
  btnText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  tip:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#8B8B8B',
    marginTop: 30
  },
  btnBack:{
    width: 15,
    height: 28.3,
    marginTop: -510,
    marginLeft: 30,
  }
});