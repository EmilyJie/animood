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
        <Text style={styles.score}>良好</Text>
      </View>
      <View style={styles.testDateBg}>
        <Text style={styles.testDate}>2022/03/10</Text>
      </View>
      <TouchableOpacity 
        style={styles.btnTestBg} 
        onPress={() => navigation.navigate('Question')}
      >
        <Text style={styles.btnTest}>來做測驗</Text>
      </TouchableOpacity>
     
      <View style={styles.historyContainer}>
        <Text style={styles.title}>歷史紀錄</Text>
        <View style={styles.historyBox}>
          <View style={styles.scoreBg1}>
            <Text style={styles.detailText}>良</Text>
          </View>
          <Text style={styles.testDate}>2022/01/15</Text>
          <ModalPoup visible={detailVisible}>
            <DetailScreen></DetailScreen>
            <TouchableOpacity onPress={() => setDetailVisible(false)}>
              <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
            </TouchableOpacity>
          </ModalPoup>
          <TouchableOpacity onPress={() => setDetailVisible(true)}>
            <View style={styles.btnBg}>
              <Text style={styles.btnDetail}>詳細內容</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.historyBox}>
          <View style={styles.scoreBg1}>
            <Text style={styles.detailText}>輕</Text>
          </View>
          <Text style={styles.testDate}>2022/01/01</Text>
          <ModalPoup visible={detailVisible}>
            <DetailScreen></DetailScreen>
            <TouchableOpacity onPress={() => setDetailVisible(false)}>
              <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
            </TouchableOpacity>
          </ModalPoup>
          <TouchableOpacity onPress={() => setDetailVisible(true)}>
            <View style={styles.btnBg}>
              <Text style={styles.btnDetail}>詳細內容</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.historyBox}>
          <View style={styles.scoreBg1}>
            <Text style={styles.detailText}>輕</Text>
          </View>
          <Text style={styles.testDate}>2022/12/13</Text>
          <ModalPoup visible={detailVisible}>
            <DetailScreen></DetailScreen>
            <TouchableOpacity onPress={() => setDetailVisible(false)}>
              <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
            </TouchableOpacity>
          </ModalPoup>
          <TouchableOpacity onPress={() => setDetailVisible(true)}>
            <View style={styles.btnBg}>
              <Text style={styles.btnDetail}>詳細內容</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    width: 180,
    height: 180,
    backgroundColor: "#FFFAEE",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score:{
    fontSize: 40,
    fontWeight:"bold",
    color: "#521111",
  },
  testDateBg:{
    width: 175,
    height: 45,
    backgroundColor: "#FFFAEE",
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
  testDate:{
    fontSize: 20,
    color: "#521111",
  },
  btnTestBg:{
    width: 200,
    height: 55,
    backgroundColor: "#FE9A7B",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 40,
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
    width: 315,
    height: 75,
    backgroundColor: "#FFE8B0",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  scoreBg1:{
    width: 55,
    height: 55,
    backgroundColor: "#FFFAEE",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#702929",
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
    marginTop: -470,
    marginLeft: 270,
  }
});