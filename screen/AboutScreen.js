import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ExternalLink from '../component/ExternalLink';

const lineURL = "https://line.me/R/ti/p/@961pijzf"
const igURL = "https://instagram.com/animood_8?igshid=YmMyMTA2M2Y="

export default function AboutScreen({ navigation }) {
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
      <View style={{marginTop:30, alignItems:'center'}}>
        <View style={styles.settingBox}>
          <Text style={styles.settingText}>版本資訊</Text>
          <Text style={styles.settingText}>1.3.0</Text>
        </View>
        <View style={styles.settingBox}>
          <ExternalLink url={lineURL}>
            <Image source={require('../assets/user/btn_line.png')} style={styles.btnLink}/>
          </ExternalLink>
          <Text style={styles.settingText}>@961pijzf</Text>
        </View>
        <View style={styles.settingBox}>
          <ExternalLink url={igURL}>
            <Image source={require('../assets/user/btn_ig.png')} style={styles.btnLink}/>
          </ExternalLink>
          <Text style={styles.settingText}>animood_8</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image source={require('../assets/user/btn_goBack.png')} style={styles.btnSent}/>
        </TouchableOpacity> 
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
  settingBox:{
    width: 300,
    height: 60,
    backgroundColor: '#FFFAEE',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
  },
  btnLink:{
    width: 40,
    height: 40,
  },
  btnSent:{
    width: 50,
    height: 50,
    marginTop: 70,
  }
});