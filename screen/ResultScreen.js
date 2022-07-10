import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
          style={{ position: 'absolute' ,flex: 1 }}
          source={require('../assets/gif/bg_gif.gif')}
        />
      <View style={styles.resultBg}>
        <Text style={styles.detailDate}>測驗結果</Text>
        <LottieView source={require('../json/depression_none.json')} autoPlay loop style={{width: 150}}/>
        <View style={styles.scoreBg}>
          <Text style={styles.score}>良好</Text>
        </View>
        <View style={styles.suggest}>
            <Text style={styles.suggestTitle}>建議內容：</Text>
            <Text style={styles.suggestText}>恭喜你！目前的身心適應狀況很良好，如果有保持快樂與放鬆的小撇步，歡迎跟我們或是親朋好友分享，繼續將這份美麗的心情感染給身邊的人吧！</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.btnTestBg} 
        onPress={() => navigation.navigate('Test')}
      >
        <Text style={styles.btnTest}>回到測驗頁</Text>
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
  resultBg:{
    backgroundColor: '#FFFAEE',
    width: 375,
    height: 668,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 75,
  },
  detailDate:{
      fontSize: 25,
      fontWeight: 'bold',
      color: "#702929",
      marginLeft: -200
  },
  detailText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: "#702929",
  },
  score:{
      fontSize: 30,
      fontWeight:"bold",
      color: "#521111",
  },
  scoreBg:{
    backgroundColor: '#FFE8B0',
    width: 300,
    height: 85,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    justifyContent: 'space-around',
    alignItems: 'center',
},
  suggest:{
      backgroundColor: '#FFE8B0',
      width: 300,
      height: 225,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.5,
      paddingTop: 5
  },
  suggestTitle:{
      fontSize: 18,
      fontWeight: "bold",
      color: "#521111",
      marginTop: 15,
      marginLeft: 20,
  },
  suggestText:{
      width: 270,
      fontSize: 18,
      color: "#521111",
      marginTop: 15,
      marginLeft: 20,
      lineHeight: 30
  },
  btnTestBg:{
    width: 300,
    height: 60,
    backgroundColor: "#D2A98D",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTest:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFAEE",
  },
});