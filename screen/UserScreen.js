import React , { Component }from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image, Modal, Animated} from 'react-native';
import ModalPoup from '../component/ModalPoup';
import AccountScreen from './AccountScreen';
import NotificationScreen from './NotificationScreen';
import SolvedScreen from './SolvedScreen';
import AboutScreen from './AboutScreen';

export default function UserScreen({ navigation }) {
  const [accountVisible, setAccountVisible] = React.useState(false);
  const [notificationVisible, setNotificationVisible] = React.useState(false);
  const [solvedVisible, setSolvedVisible] = React.useState(false);
  const [aboutVisible, setAboutVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image 
        style={{ position: 'absolute' ,flex: 1 }}
        source={require('../assets/gif/bg_gif.gif')}
      />
      <Image
        style={styles.profilePhoto}
        source={require('../assets/img_head1.png')}
      />
      <View style={styles.setting}>
        <View style={styles.settingBox}>
          <Image
            style={{ width: 28.15, height: 30, marginLeft: 20 }}
            source={require('../assets/user/img_account.png')}
          />
          <Text style={styles.settingText}>會員資訊</Text>
          <ModalPoup visible={accountVisible}>
              <AccountScreen></AccountScreen>
              <TouchableOpacity onPress={() => setAccountVisible(false)}>
                <Image source={require('../assets/btn_sent.png')} style={styles.btnSent}/>
              </TouchableOpacity> 
          </ModalPoup>
          <TouchableOpacity onPress={() => setAccountVisible(true)}>
            <Image
              style={styles.arrow}
              source={require('../assets/user/btn_arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingBox}>
          <Image
            style={{ width: 27.5, height: 27.5, marginLeft: 20 }}
            source={require('../assets/user/img_solved.png')}
          />
          <Text style={styles.settingText}>所有煩惱</Text>
          <ModalPoup visible={solvedVisible}>
              <SolvedScreen></SolvedScreen>
              <TouchableOpacity onPress={() => setSolvedVisible(false)}>
                <Image source={require('../assets/btn_sent.png')} style={styles.btnSent}/>
              </TouchableOpacity> 
          </ModalPoup>
          <TouchableOpacity onPress={() => setSolvedVisible(true)}>
            <Image
              style={styles.arrow}
              source={require('../assets/user/btn_arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingBox}>
          <Image
            style={{ width: 26.65, height: 30, marginLeft: 20 }}
            source={require('../assets/user/img_notification.png')}
          />
          <Text style={styles.settingText}>提醒設定</Text>
          <ModalPoup visible={notificationVisible}>
              <NotificationScreen></NotificationScreen>
              <TouchableOpacity onPress={() => setNotificationVisible(false)}>
                <Image source={require('../assets/btn_sent.png')} style={styles.btnSent}/>
              </TouchableOpacity> 
          </ModalPoup>
          <TouchableOpacity onPress={() => setNotificationVisible(true)}>
            <Image
              style={styles.arrow}
              source={require('../assets/user/btn_arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingBox}>
          <Image
            style={{ width: 27, height: 28, marginLeft: 20 }}
            source={require('../assets/user/img_about.png')}
          />
          <Text style={styles.settingText}>關於我們</Text>
          <ModalPoup visible={aboutVisible}>
              <AboutScreen></AboutScreen>
              <TouchableOpacity onPress={() => setAboutVisible(false)}>
                <Image source={require('../assets/btn_sent.png')} style={styles.btnSent}/>
              </TouchableOpacity> 
          </ModalPoup>
          <TouchableOpacity onPress={() => setAboutVisible(true)}>
            <Image
              style={styles.arrow}
              source={require('../assets/user/btn_arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signOut} onPress={() => navigation.navigate('Login')}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 20 }}
            source={require('../assets/user/img_signOut.png')}
          />
          <Text style={styles.signOutText}>登出</Text>
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
  profilePhoto:{
    width: 100,
    height: 100,
    marginTop: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    overflow: 'visible',
  },
  setting:{
    width: 345,
    height: 455,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  settingBox:{
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  signOut:{
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
    marginLeft: 15,
  },
  signOutText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FE9A7B',
    marginLeft: 15,
  },
  arrow:{
    width: 13,
    height: 25,
    marginLeft: 130,
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    marginTop: 80,
  },
  btnSent:{
    width: 50,
    height: 50,
    marginTop: -90,
    marginLeft: 145,
  }
});