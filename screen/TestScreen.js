import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, Button} from 'react-native';
import ModalPoup from '../component/ModalPoup';

const DetailModal = () => {
  return(
    <View style={styles.detailBg}>
      <View style={styles.detailDate}>
        <Text style={styles.detailText}>2022/01/15</Text>
      </View>
      <View style={styles.detailScore}>
        <Text style={styles.score}>80</Text>
      </View>
      <View style={styles.suggest}>
        <Text style={styles.suggestText}>建議內容：</Text>
        <Text style={styles.suggestText}>可以更好！</Text>
      </View>
    </View>
  )
}


export default function TestScreen({ navigation }) {
  const [detailVisible, setDetailVisible] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' ,flex: 1 }}
        source={require('../assets/gif/bg_gif.gif')}
      />
      <View style={styles.scoreBg}>
        <Text style={styles.score}>85</Text>
      </View>
      <View style={styles.testDateBg}>
        <Text style={styles.testDate}>2022/03/10</Text>
      </View>
      <TouchableOpacity style={styles.btnTestBg} onPress={() => navigation.navigate('Question')}>
        <Text style={styles.btnTest}>來做測驗</Text>
      </TouchableOpacity>
      {/* <Button style={styles.btnTestBg} onPress={this.goToTest} title="來做測驗"/> */}
     
      <View style={styles.historyContainer}>
        <Text style={styles.title}>歷史紀錄</Text>
        <View style={styles.historyBox}>
            <Text style={styles.detailText}>2022/01/15</Text>
            <Text style={styles.detailText}>80分</Text>
            <ModalPoup visible={detailVisible}>
              <DetailModal></DetailModal>
              <TouchableOpacity onPress={() => setDetailVisible(false)}>
                <Image source={require('../assets/btn_close.png')} style={styles.btnClose}/>
              </TouchableOpacity>
            </ModalPoup>
            <TouchableOpacity onPress={() => setDetailVisible(true)}>
                <Text style={styles.detailText}>詳細內容</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.historyBox}>
            <Text style={styles.detailText}>2022/01/01</Text>
            <Text style={styles.detailText}>90分</Text>
            <TouchableOpacity>
                <Text style={styles.detailText}>詳細內容</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.historyBox}>
            <Text style={styles.detailText}>2021/12/13</Text>
            <Text style={styles.detailText}>86分</Text>
            <TouchableOpacity>
              <Text style={styles.detailText}>詳細內容</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
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
    fontSize: 46,
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
    backgroundColor: "#F95A5A",
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
    width: 320,
    height: 45,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detailText:{
    fontSize: 20,
    color: "#521111",
  },
  detailBg:{
    backgroundColor: '#FFFAEE',
    width: 350,
    height: 455,
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
    paddingTop: 15,
    paddingBottom: 20,
  },
  detailDate:{
    backgroundColor: '#FFE8B0',
    width: 175,
    height: 45,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -120,
  },
  detailScore:{
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  suggest:{
    backgroundColor: '#FFE8B0',
    width: 300,
    height: 165,
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
  suggestText:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#521111",
    marginTop: 15,
    marginLeft: 20,
  },
  btnClose:{
    width: 50,
    height: 50,
    marginTop: -420,
    marginLeft: 270,
  }
});