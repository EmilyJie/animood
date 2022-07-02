import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View, KeyboardAvoidingView } from 'react-native';
import LottieView from 'lottie-react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from "react-native-gifted-chat";

const animoodAvatar = require('../assets/home/animoodAvatar.png');
const animoodUser1 = require('../assets/img_head2.png');
const animoodUser2 = require('../assets/img_head3.png');
const animoodUser3 = require('../assets/img_head4.png');

const Animood = { _id: 2, name: 'Animood', avatar: animoodAvatar }
const User1 = { _id: 3, name: 'Animood', avatar: animoodUser1 }
const User2 = { _id: 4, name: 'Animood', avatar: animoodUser2 }
const User3 = { _id: 6, name: 'Animood', avatar: animoodUser3 }

export default function WorryScreen({ navigation, props }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 6, text: '我也是跟你一樣阿，別擔心！', createdAt: new Date(),
        user: User3
      },
      {
        _id: 5, text: '很羨慕還在求學的人呀', createdAt: new Date(),
        user: User2
      },
      {
        _id: 4, text: '當年我也跟你一樣焦慮，趁現在很多時間，好好享受人生吧！', createdAt: new Date(),
        user: User2
      },
      {
        _id: 3, text: '沒關係，總有一天會找到的！', createdAt: new Date(),
        user: User1
      },
      {
        _id: 2, text: '我聽到一些別人的訊息，帶回來給主人聽聽看！', createdAt: new Date(),
        user: Animood
      },
      {
        _id: 1, text: '帶著這個煩惱旅行時', createdAt: new Date(),
        user: Animood
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderSend = (props) => {
    return(
      <Send {...props}>
        <View style={styles.sendBg}>
          <Image style={{width: 25, height: 22}} source={require('../assets/btn_send.png')}/>
        </View>
      </Send>
    );
  }

  const scrollToBottomComponent = () => {
    return(
      <Image style={styles.btn_goBack} source={require('../assets/btn_goDown.png')}/>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback> */}
    <View style={{flex:1}}>
      <View style={{alignItems:'center', height: 895}}>
        <LottieView source={require('../json/bg_happy.json')} autoPlay loop/>
        <TouchableOpacity
          style={{marginTop: 80, marginLeft: -320}}
          onPress={() => navigation.navigate('Travel')}
        >
          <Image style={styles.btn_back} source={require('../assets/btn_back.png')}/>
        </TouchableOpacity>
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <Image style={styles.img_animal} source={require('../assets/animals/cat.png')}/>
          <View style={styles.inputContainer}>
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              onQuickReply={(quickReply) => onQuickReply(quickReply)}
              user={{
                _id: 1,
              }}
              placeholder=""
              alwaysShowSend
              timeTextStyle={{
                left: {
                  color: '#FFFAEE'
                },
                right: {
                  color: '#FFFAEE'
                }
              }}
              renderBubble={(props) => {
                return(
                  <Bubble
                  {...props}
                  wrapperStyle={{
                    left: {
                      backgroundColor: '#FFBB9E',
                      marginBottom: 10,
                    },
                    right: {
                      backgroundColor: '#FFE8B0',
                      marginBottom: 10,
                    }
                  }}
                  textStyle={{
                    left: {
                      fontWeight:"bold",
                      color: '#702929'
                    },
                    right: {
                      fontWeight:"bold",
                      color: '#702929'
                    }
                  }}
                />
                );
              }}
              renderInputToolbar={(props) => {
                return(
                  <InputToolbar 
                  {...props}
                  containerStyle={{
                    backgroundColor: '#FFE8B0',
                    borderRadius: 20,
                    borderTopWidth: 0,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                    justifyContent: 'center',
                  }}
                  />
                );
              }}
              renderSend={renderSend}
              renderAvatarOnTop
              scrollToBottom
              scrollToBottomComponent={scrollToBottomComponent}
            />
          </View>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  allWorreis:{
    marginTop: 120,
    height: 400,
    alignItems: 'center',
  },
  home_bg:{
    zIndex: 0,
    position: 'absolute' ,
    flex: 1
  },
  btn_back:{
    width: 14,
    height: 28,
  },
  img_animal:{
    width: 323,
    height: 267,
  },
  inputContainer:{
    width: 420,
    height: 540,
    backgroundColor: '#FFFAEE',
    zIndex: 10,
    marginTop: -120,
    borderRadius: 20,
    paddingBottom: 25
  },
  sendBg:{
    width: 60,
    height: 30,
    backgroundColor: '#FE9A7B',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});