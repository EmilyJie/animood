import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { handleAvatar } from '../component/HandleAvatar';
import { StoreContext } from "../stores";

export default function SolvedScreen({ navigation }) {
  const {worryWordsState, worryDateState, userAvatarState} = useContext(StoreContext)
  const [wooryWords, setWorryWords] = worryWordsState
  const [worryDate, setWorryDate] = worryDateState
  const [userAvatar, setUserAvatar] = userAvatarState;

  return (
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' ,flex: 1 }}
        source={require('../assets/gif/bg_gif.gif')}
      />
      <View style={styles.photoBg}>
        {handleAvatar(userAvatar)}
      </View>
      <>
      {wooryWords ? (
        <View style={{ marginTop:20, height:350, justifyContent:'flex-start', alignItems:'center', paddingTop: 15 }}>
          <Text style={styles.listTitle}>煩惱列表</Text>
          <TouchableOpacity style={styles.historyBox}>
            <Image 
              style={{width: 70, height: 70}}
              source={require('../assets/animals/cat_circle.png')}
            />
            <View style={{height: 70, justifyContent: 'space-evenly'}}>
              <Text style={styles.worryText}>{worryDate}</Text>
              <Text style={styles.worryText}>點我看看煩惱吧！</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ marginTop:20, height:350, justifyContent:'center', alignItems:'center' }}>
          <Text style={styles.settingText}>目前還沒有任何煩惱哦！</Text>
        </View>
      )}
      </>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Image source={require('../assets/user/btn_goBack.png')} style={styles.btnSent}/>
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
  photoBg:{
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  profilePhoto:{
    width: 100,
    height: 100,
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
  },
  listTitle:{
    fontSize: 20,
    fontWeight:"bold",
    color: '#D2A98D',
    marginBottom: 15
  },
  historyBox:{
    width: 320,
    height: 100,
    backgroundColor: "#FFFAEE",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  worryText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
  },
  btnSent:{
    width: 50,
    height: 50,
    marginTop: 70,
  }
});