import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { HomeStack, ReplyStack, TestStack, UserStack } from '../screen/index';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconPath;
          let iconWidth;
          let iconHeight;

          if (route.name === '首頁') {
            iconPath = focused
            ? require('../assets/home/btn_home_click.png'):
            require('../assets/home/btn_home.png') ;
            iconWidth = focused ? 50 : 50;
            iconHeight = focused ? 50 : 50;
          } else if (route.name === '回覆') {
            iconPath = focused
            ? require('../assets/home/btn_reply_click.png'):
            require('../assets/home/btn_reply.png');
            iconWidth = focused ? 50 : 50;
            iconHeight = focused ? 50 : 50;
          }else if (route.name == '測驗') {
            iconPath = focused
            ? require('../assets/home/btn_test_click.png'):
            require('../assets/home/btn_test.png');
            iconWidth = focused ? 50 : 50;
            iconHeight = focused ? 50 : 50;
          }else if (route.name == '個人') {
            iconPath = focused
            ? require('../assets/home/btn_person_click.png'):
            require('../assets/home/btn_person.png');
            iconWidth = focused ? 50 : 50;
            iconHeight = focused ? 50 : 50;
          }

          // You can return any component that you like here!
          return (
            <Image 
              style={{width: iconWidth, height: iconHeight, marginTop: 20,}}
              source={iconPath} 
            />
          );
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: '#FFBB9E',
          borderRadius: 30,
        }
      })}
      tabBarOptions={{
        showLabel:false,
        style:{
          borderRadius: 30,
        }
      }}
    >
    <Tab.Screen name="首頁" component={HomeStack}/>
    <Tab.Screen name="回覆" component={ReplyStack}/>
    <Tab.Screen name="測驗" component={TestStack}/>
    <Tab.Screen name="個人" component={UserStack}/>
  </Tab.Navigator>
);
};

export default HomeTabNavigation;