import React , { useState }from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function AccountScreen() {
    const [name, onChangeName] = useState(null);
    const [password, onChangePassword] = useState(null);
    return (
        <View style={styles.setting}>
          <View style={styles.settingBox}>
              <Text style={styles.settingText}>帳號</Text>
              <Text style={styles.detailText}>a123456</Text>
          </View>
          <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
              placeholder="名稱"
              placeholderTextColor={'#FF986D'}
              textContentType='name'
              keyboardAppearance='dark'
          />
          <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="密碼"
              placeholderTextColor={'#FF986D'}
              textContentType='password'
              keyboardAppearance='dark'
              secureTextEntry={true}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  setting:{
    width: 345,
    height: 455,
    backgroundColor: '#FFBB9E',
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  settingBox:{
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
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
    color: '#FF986D',
    marginLeft: 15,
  },
  detailText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FF986D',
    marginLeft: 40,
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
});