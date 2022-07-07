import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { HomeStack, TravelStack, TestStack, UserStack } from '../screen/index';

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
            iconWidth = focused ? 35 : 35;
            iconHeight = focused ? 35 : 35;
          } else if (route.name === '旅行') {
            iconPath = focused
            ? require('../assets/home/btn_travel_click.png'):
            require('../assets/home/btn_travel.png');
            iconWidth = focused ? 38 : 38;
            iconHeight = focused ? 30.08 : 30.08;
          }else if (route.name == '測驗') {
            iconPath = focused
            ? require('../assets/home/btn_test_click.png'):
            require('../assets/home/btn_test.png');
            iconWidth = focused ? 32 : 32;
            iconHeight = focused ? 39 : 39;
          }else if (route.name == '個人') {
            iconPath = focused
            ? require('../assets/home/btn_user_click.png'):
            require('../assets/home/btn_user.png');
            iconWidth = focused ? 30 : 30;
            iconHeight = focused ? 35 : 35;
          }

          // You can return any component that you like here!
          return (
            <Image 
              style={{width: iconWidth, height: iconHeight, marginTop: 20, overflow: 'visible'}}
              source={iconPath} 
            />
          );
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: '#FFFAEE',
        }
      })}
      tabBarOptions={{
        showLabel:false,
        style:{
          borderRadius: 30,
        }
      }}
    >
    <Tab.Screen 
      name="首頁" 
      component={HomeStack}
      options={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          height: 85,
          backgroundColor: '#FFFAEE',
        }
      })}
    />
    <Tab.Screen 
      name="旅行" 
      component={TravelStack}
      options={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          height: 85,
          backgroundColor: '#FFFAEE',
        }
      })}
    />
    <Tab.Screen 
      name="測驗" 
      component={TestStack}
      options={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          height: 85,
          backgroundColor: '#FFFAEE',
        }
      })}
    />
    <Tab.Screen name="個人" component={UserStack}/>
  </Tab.Navigator>
);
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if( routeName == 'Worry'){
    return 'none';
  }
  if( routeName == 'Question'){
    return 'none';
  }
  if( routeName == 'Question2'){
    return 'none';
  }
  if( routeName == 'Question3'){
    return 'none';
  }
  if( routeName == 'Question4'){
    return 'none';
  }
  if( routeName == 'Question5'){
    return 'none';
  }
  if( routeName == 'Result'){
    return 'none';
  }
  if( routeName == 'BackWorry'){
    return 'none';
  }
  if( routeName == 'WorryUpdate'){
    return 'none';
  }
  if( routeName == 'OthersWorry'){
    return 'none';
  }
  if( routeName == 'Mood'){
    return 'none';
  }
  return 'flex';
}

export default HomeTabNavigation;