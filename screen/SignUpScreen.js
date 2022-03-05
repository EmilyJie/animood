import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, onChangename] = useState(null);
  const [account, onChangeaccount] = useState(null);
  const [password, onChangepassword] = useState(null);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animood</Text>
        <View style={styles.photoSelection}>
          <TouchableOpacity>
            <Image style={styles.profliePhoto} source={require('../assets/img_head1.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.profliePhoto} source={require('../assets/img_head2.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.profliePhoto} source={require('../assets/img_head3.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.profliePhoto} source={require('../assets/img_head4.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangename}
            value={name}
            placeholder="名稱"
            placeholderTextColor={'#FF986D'}
            textContentType='username'
            keyboardAppearance='dark'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeaccount}
            value={account}
            placeholder="帳號"
            placeholderTextColor={'#FF986D'}
            textContentType='username'
            keyboardAppearance='dark'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangepassword}
            value={password}
            placeholder="密碼"
            placeholderTextColor={'#FF986D'}
            textContentType='password'
            keyboardAppearance='dark'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.signUp}>
            <Text style={styles.btnText}>註冊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.btnText}>登入</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
            <Image style={styles.btnSent} source={require('../assets/btn_sent.png')}/>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFBB9E',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  title:{
    fontSize: 80,
    fontWeight:"bold",
    lineHeight: 94,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  photoSelection:{
    width: 285,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  profliePhoto:{
    width: 60,
    height: 60,
  },
  inputContainer:{
    marginTop: 10,
  },
  input:{
    backgroundColor: '#FFF9F7',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#FF986D',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
  forget:{
    fontSize: 14,
    fontWeight:"bold",
    color: '#FFFFFF',
    textDecorationLine: 'underline'
  },
  btn:{
    width: 285,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUp:{
    width: 125,
    height: 60,
    backgroundColor: '#FF7D3C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  login:{
    width: 125,
    height: 60,
    backgroundColor: '#F95A5A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  btnSent:{
    width: 45,
    height: 45,
    marginTop: 40
  }
});