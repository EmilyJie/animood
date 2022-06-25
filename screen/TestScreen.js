import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView} from 'react-native';
import ModalPoup from '../component/ModalPoup';
import DetailScreen from './DetailScreen';

export default function TestScreen({ navigation }) {
  const [detailVisible, setDetailVisible] = React.useState(false);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' ,flex: 1 }}
        source={require('../assets/gif/bg_gif.gif')}
      />
      <View style={styles.scoreBg}>
        <Text style={styles.testDate}>上次紀錄：2022/03/10</Text>
        <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'center',}}>
          <Image 
            style={{width: 125, height: 115}}
            source={require('../assets/mood/happy_face.png')}
          />
          <Text style={styles.score}>良好</Text>
          <TouchableOpacity 
            style={styles.btnTestBg} 
            onPress={() => navigation.navigate('Question')}
          >
            <Text style={styles.btnTest}>來做測驗</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      <View style={styles.historyContainer}>
        <Text style={styles.title}>歷史紀錄</Text>
        <ModalPoup visible={detailVisible}>
          <DetailScreen></DetailScreen>
          <TouchableOpacity onPress={() => setDetailVisible(false)}>
            <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
          </TouchableOpacity>
        </ModalPoup>
        <TouchableOpacity style={styles.historyBox} onPress={() => setDetailVisible(true)}>
          <View style={styles.scoreBg1}>
            <Image 
              style={{width: 61, height: 60}}
              source={require('../assets/mood/happy.png')}
            />
          </View>
          <View style={{height: 70, justifyContent: 'space-evenly'}}>
            <Text style={styles.testDate}>2022/01/15</Text>
            <Text style={styles.testText}>良好</Text>
          </View>
        </TouchableOpacity>

        {/* <ModalPoup visible={detailVisible}>
          <DetailScreen></DetailScreen>
          <TouchableOpacity onPress={() => setDetailVisible(false)}>
            <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
          </TouchableOpacity>
        </ModalPoup> */}
        <TouchableOpacity style={styles.historyBox}>
          <View style={styles.scoreBg1}>
            <Image 
              style={{width: 60, height: 40}}
              source={require('../assets/mood/normal.png')}
            />
          </View>
          <View style={{height: 70, justifyContent: 'space-evenly'}}>
            <Text style={styles.testDate}>2022/01/01</Text>
            <Text style={styles.testText}>輕度</Text>
          </View>
        </TouchableOpacity>

        {/* <ModalPoup visible={detailVisible}>
          <DetailScreen></DetailScreen>
          <TouchableOpacity onPress={() => setDetailVisible(false)}>
            <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
          </TouchableOpacity>
        </ModalPoup> */}
        <TouchableOpacity style={styles.historyBox}>
          <View style={styles.scoreBg1}>
            <Image 
              style={{width: 60, height: 40}}
              source={require('../assets/mood/normal.png')}
            />
          </View>
          <View style={{height: 70, justifyContent: 'space-evenly'}}>
            <Text style={styles.testDate}>2022/12/13</Text>
            <Text style={styles.testText}>輕度</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    width:415,
    height:896,
  },
  scoreBg:{
    width: 375,
    height: 400,
    backgroundColor: "#FFFAEE",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 90,
    paddingTop: 30
  },
  score:{
    fontSize: 40,
    fontWeight:"bold",
    color: "#521111",
    marginTop: 25
  },
  testDate:{
    left: 20,
    fontSize: 18,
    color: "#521111",
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
  historyContainer:{
    width: 360,
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
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#521111",
    marginLeft: -210,
    marginBottom: 15
  },
  historyBox:{
    width: 320,
    height: 100,
    backgroundColor: "#FFE8B0",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scoreBg1:{
    width: 80,
    height: 80,
    backgroundColor: "#FFFAEE",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  testText:{
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: "#521111"
  },
  btnBg:{
    width: 90,
    height: 35,
    backgroundColor: "#EEA970",
    borderRadius: 15,
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
  btnDetail:{
    fontSize: 16,
    fontWeight: 'bold',
    color: "#FFFAEE",
  },
  btnClose:{
    width: 50,
    height: 50,
    marginTop: -595,
    marginLeft: 290,
  }
});