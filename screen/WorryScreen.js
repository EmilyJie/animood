import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View, KeyboardAvoidingView } from 'react-native';
import LottieView from 'lottie-react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from "react-native-gifted-chat";
import { StoreContext } from "../stores";
import { format } from 'date-fns';

const animoodAvatar = require('../assets/home/animoodAvatar.png');

const Animood = { _id: 2, name: 'Animood', avatar: animoodAvatar }

export default function WorryScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const {worryWordsState} = useContext(StoreContext)
  const [wooryWords, setWorryWords] = worryWordsState
  const {worryDateState} = useContext(StoreContext)
  const [worryDate, setWorryDate] = worryDateState

  useEffect(() => {
    setMessages([
      {
        _id: 2, text: '先用20個字跟我說說吧~', createdAt: new Date(),
        user: Animood
      },
      {
        _id: 1, text: '嗨，最近有什麼煩惱嗎？', createdAt: new Date(),
        user: Animood
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    setWorryWords(true);
    setWorryDate(format(new Date(), 'yyyy-MM-dd'));
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
    <View style={{flex:1}}>
      <View style={{alignItems:'center', height: 895}}>
        <LottieView source={require('../json/bg_happy.json')} autoPlay loop/>
        <TouchableOpacity
          style={{marginTop: 80, marginLeft: -320}}
          onPress={() => navigation.navigate('Home')}
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