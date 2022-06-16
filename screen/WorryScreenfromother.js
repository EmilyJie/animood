import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from "react-native-gifted-chat";

// import { Dialogflow_V2 } from "react-native-dialogflow";
// import { dialogflowConfig } from "./env";

const animoodAvatar = require('../assets/home/animoodAvatar.png');

const Animood = { _id: 2, name: 'Animood', avatar: animoodAvatar }

export default function WorryScreen({ navigation, props }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 3, text: '想對我主人說點什麼嗎?', createdAt: new Date(),
        user: Animood
      },
      {
        _id: 2, text: '剛分手，不知道怎麼調適心情', createdAt: new Date(),
        user: Animood
      },
      {
        _id: 1, text: '我主人的煩惱是', createdAt: new Date(),
        user: Animood
      },
    ])

    // Dialogflow_V2.setConfiguration(
    //   dialogflowConfig.client_email,
    //   dialogflowConfig.private_key,
    //   Dialogflow_V2.LANG_CHINESE_TAIWAN,
    //   dialogflowConfig.project_id
    // )
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
        <Image 
          style={{ position: 'absolute' }}
          source={require('../assets/travel/img_travelBg.png')}
        />
        <TouchableOpacity
          style={{marginTop: 80, marginLeft: -320}}
          onPress={() => navigation.navigate('Travel')}
        >
          <Image style={styles.btn_back} source={require('../assets/btn_back.png')}/>
        </TouchableOpacity>
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <Image style={styles.img_animal} source={require('../assets/animals/racoon.png')}/>
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
    width: 355,
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