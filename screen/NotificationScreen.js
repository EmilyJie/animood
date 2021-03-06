import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Switch } from 'react-native';
//import { Switch } from 'react-native-switch';
import DropDownPicker from 'react-native-dropdown-picker';

export default function NotificationScreen({ navigation }) {
    const [notificationEnabled, setNotificationEnabled] = useState(false);
    const notificationSwitch = () => setNotificationEnabled(previousState => !previousState);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'AM 9:00', value: 'am9'},
      {label: 'AM 11:00', value: 'am11'},
      {label: 'PM 15:00', value: 'pm15'},
      {label: 'PM 20:00', value: 'pm20'},
    ]);
    return (
      <View style={styles.container}>
        <Image 
          style={{ position: 'absolute' ,flex: 1 }}
          source={require('../assets/gif/bg_gif.gif')}
        />
        <View style={styles.photoBg}>
          <Image
            style={styles.profilePhoto}
            source={require('../assets/user/img_bigNotification.png')}
          />
        </View>
        <View style={{marginTop:30, alignItems:'center'}}>
          <View style={styles.settingBox}>
            <Text style={styles.settingText}>每日記錄提醒</Text>
            <View style={styles.btnSwitch}>
              <Switch
                value={notificationEnabled}
                onValueChange={notificationSwitch}
                // disabled={false}
                // activeText={'ON'}
                // activeTextStyle={styles.inText}
                // inActiveText={'OFF'}
                // inactiveTextStyle={styles.inText}
                // backgroundActive={'#D2C4AA'}
                // backgroundInactive={'#D8B37E'}
                // circleSize={30}
                // barHeight={30}
                // circleBorderWidth={0}
                // circleActiveColor={'#D2A98D'}
                // circleInActiveColor={'#D2A98D'}

                trackColor={{ false: "#FBEDD3", true: "#D8B37E" }}
                thumbColor={notificationEnabled ? "#FFF5F0" : "#D2A98D"}
                ios_backgroundColor="#FBEDD3"
              />
            </View>
          </View>
          <View style={styles.settingBox}>
            <Text style={styles.settingText}>時間</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              showArrowIcon={false}
              showTickIcon={false}
              closeAfterSelecting={true}
              placeholder="AM 9:00"
              style={{
                  width: 100,
                  height: 30,
                  backgroundColor: '#FBFBFB',
                  borderRadius: 20,
                  borderColor: '#D2A98D',
                  marginLeft: 130,
              }}
              arrowIconStyle={{
                  width: 15,
              }}
              tickIconStyle={{
                  width: 15,
                }}
              dropDownContainerStyle={{
                  width: 100,
                  marginLeft: 130,
                  borderRadius: 20,
                  borderColor: '#D5D5D5'
              }}
              scrollViewProps={{
                  decelerationRate: "fast",
              }}
              textStyle={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#D2A98D'
              }}
              disabledStyle={{
                  opacity: 0.5
              }}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Image source={require('../assets/user/btn_sent.png')} style={styles.btnSent}/>
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
  setting:{
    width: 345,
    height: 455,
    backgroundColor: '#FFEBC3',
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
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
    flexDirection: 'row',
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
    marginLeft: 15,
  },
  btnSwitch:{
    marginLeft: 90,
  },
  inText:{
    fontWeight:"bold",
  },
  btnSent:{
    width: 50,
    height: 50,
    marginTop: 220,
  }
});