import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function SolvedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' ,flex: 1 }}
        source={require('../assets/gif/bg_gif.gif')}
      />
      <View style={styles.photoBg}>
        <Image
          style={styles.profilePhoto}
          source={require('../assets/img_head1.png')}
        />
      </View>
      <View style={{ marginTop:20, height:350, justifyContent:'center', alignItems:'center' }}>
        <Text style={styles.settingText}>目前還沒有任何煩惱哦！</Text>
      </View>
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
  btnSent:{
    width: 50,
    height: 50,
    marginTop: 70,
  }
});