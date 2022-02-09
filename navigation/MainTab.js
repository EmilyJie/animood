import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { HomeStack, ReplyStack, TestStack, PersonStack } from '../screen/index';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color,size }) => {
          let iconPath;
          let iconWidth;
          let iconHeight;
          let iconSize;

          if (route.name === '首頁') {
            iconPath = focused
            ? require('../assets/btn-homeOntouch.png'):
            require('../assets/btn-home.png') ;
            iconWidth = focused ? 35 : 35;
            iconHeight = focused ? 42 : 42;
          } else if (route.name === '回覆') {
            iconPath = focused
            ? require('../assets/btn-trendOntouch.png'):
            require('../assets/btn-trend.png');
            iconWidth = focused ? 37 : 37;
            iconHeight = focused ? 35 : 35;
          }else if (route.name == '測驗') {
            iconPath = focused
            ? require('../assets/btn-monthOntouch.png'):
            require('../assets/btn-month.png');
            iconWidth = focused ? 35 : 35;
            iconHeight = focused ? 35 : 35;
          }else if (route.name == '個人') {
            iconPath = focused
            ? require('../assets/btn-goalOntouch.png'):
            require('../assets/btn-goal.png');
            iconWidth = focused ? 24 : 24;
            iconHeight = focused ? 36 : 36;
          }

          // You can return any component that you like here!
          return (
            <Image 
              style={{width: iconWidth, height: iconHeight, marginTop: 20,}}
              source={iconPath} 
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel:false,
        style: {
          position: 'absolute',
          height:90,
          backgroundColor:"#fff",
          borderRadius: 30,
          borderWidth: 1,
          borderColor:'#D9D9D9',
        },
      }}
    >
    <Tab.Screen name="首頁" component={HomeStack}/>
    <Tab.Screen name="回覆" component={ReplyStack}/>
    <Tab.Screen name="測驗" component={TestStack}/>
    <Tab.Screen name="個人" component={PersonStack}/>
  </Tab.Navigator>
);
};

export default HomeTabNavigation;