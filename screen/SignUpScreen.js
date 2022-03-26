import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, onChangename] = useState(null);
  const [account, onChangeaccount] = useState(null);
  const [password, onChangepassword] = useState(null);

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
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
          placeholderTextColor={'#D2A98D'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeaccount}
          value={account}
          placeholder="帳號"
          placeholderTextColor={'#D2A98D'}
          textContentType='username'
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangepassword}
          value={password}
          placeholder="密碼"
          placeholderTextColor={'#D2A98D'}
          textContentType='password'
          keyboardAppearance='dark'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Image style={styles.btnSent} source={require('../assets/btn_sent.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFEBC3',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  logo:{
    width: 337.62,
    height: 55.0,
    marginTop: 120,
  },
  photoSelection:{
    width: 285,
    marginTop: 30,
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
    backgroundColor: '#FFF9F6',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#D2A98D',
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
  btnSent:{
    width: 45,
    height: 45,
    marginTop: 20
  }
});