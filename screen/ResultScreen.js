import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' }}
        source={require('../assets/img_bg.png')}
      />
      <View style={styles.resultAnimal}>
        <Image 
          style={{ width: 194, height: 140, marginLeft: 5 }}
          source={require('../assets/test/img_textBg.png')}
        />
        <Text style={styles.title}>測驗結果！</Text>
        <Image 
          style={{ width: 249, height: 188 }}
          source={require('../assets/animals/racoon.png')}
        />
        <Image 
          style={{ width: 103, height: 20, marginTop: -10, marginLeft: -20 }}
          source={require('../assets/animals/img_shadow.png')}
        />
      </View>
      <View style={styles.result}>
        <View style={styles.scoreBg}>
          <Text style={styles.score}>90</Text>
        </View>
        <View style={styles.suggestBg}>
          <Text style={styles.suggestText}>建議內容：</Text>
          <Text style={styles.suggestText}>繼續保持！</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image 
          style={styles.btnCheck}
          source={require('../assets/test/btn_check.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    width:415,
    height:896,
  },
  resultAnimal:{
    marginTop: 50,
    alignItems: 'center',
  },
  title:{
    position: 'absolute',
    fontSize: 20,
    fontWeight: "bold",
    color: "#521111",
    marginTop: 50,
  },
  result:{
    width: 360,
    height: 350,
    backgroundColor: "#FFFAEE",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 40,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreBg:{
    width: 320,
    height: 80,
    backgroundColor: "#FFE8B0",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score:{
    fontSize: 48,
    fontWeight: 'bold',
    color: "#521111",
  },
  suggestBg:{
    width: 320,
    height: 165,
    backgroundColor: "#FFE8B0",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 15,
  },
  suggestText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#521111",
    marginTop: 20,
    marginLeft: 20,
  },
  btnCheck:{
    width: 65,
    height: 65,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  }
});