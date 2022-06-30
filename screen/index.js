import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import TravelScreen from './TravelScreen';
import TestScreen from './TestScreen';
import UserScreen from './UserScreen';
import QuestionScreen from './QuestionScreen';
import QuestionScreen2 from './QuestionScreen2';
import QuestionScreen3 from './QuestionScreen3';
import QuestionScreen4 from './QuestionScreen4';
import QuestionScreen5 from './QuestionScreen5';
import ResultScreen from './ResultScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MoodScreen from './MoodScreen';
import WorryScreen from './WorryScreen';
import AccountScreen from './AccountScreen';
import SolvedScreen from './SolvedScreen';
import NotificationScreen from './NotificationScreen';
import AboutScreen from './AboutScreen';
import ChooseAnimalScreen from './ChooseAnimalScreen';
import ComeBackAnimalScreen from './ComeBackAnimalScreen';
import WorryScreenfromother from './WorryScreenfromother';
import WorryScreenUpdate from './WorryScreenUpdate';
import BackWorryScreen from './BackWorryScreen';

export const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"component={HomeScreen}
        options={{
          headerStyle:{
            height:0,
          }
        }}/>
      <Stack.Screen name="Worry" component={WorryScreen} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
        }}/>  
      <Stack.Screen name="WorryUpdate" component={WorryScreenUpdate} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
        }}/>
      <Stack.Screen name="Mood" component={MoodScreen}  
        options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} /> 
    </Stack.Navigator>
  );
}
  
export const TravelBackStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ComeBackAnimal" component={ComeBackAnimalScreen} 
        options={{
          headerStyle:{
            height:0,
          }
        }}/>
      <Stack.Screen name="BackWorry" component={BackWorryScreen} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
        }}/>
    </Stack.Navigator>
  );
}

export const TravelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Travel"component={TravelScreen}  
        options={{
          headerStyle:{
              height:0,
          }
        }} />
      <Stack.Screen name="ChooseAnimal" component={ChooseAnimalScreen} 
        options={{
          headerStyle:{
            height:0,
          }
        }}/>
      <Stack.Screen name="OthersWorry" component={WorryScreenfromother} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
        }}/>
      <Stack.Screen name="BackWorry" component={BackWorryScreen} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
      }}/>
    </Stack.Navigator>
  );
}
  
export const TestStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Test"component={TestScreen}  
      options={{
        headerStyle:{
            height:0,
        }
      }} />  
    <Stack.Screen name="Question" component={QuestionScreen} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Question2" component={QuestionScreen2} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Question3" component={QuestionScreen3} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Question4" component={QuestionScreen4} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Question5" component={QuestionScreen5} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Result" component={ResultScreen} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    </Stack.Navigator>
  );
}
  
export const UserStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="User"component={UserScreen}  
      options={{
      headerStyle:{
          height:0,
      }
      }} />  
    <Stack.Screen name="Login" component={LoginScreen} 
      options={{
        headerStyle:{
            height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Account" component={AccountScreen} 
      options={{
        headerStyle:{
          height:0,
        },
        headerLeft: null,
      }}/>
    <Stack.Screen name="Solved" component={SolvedScreen} 
      options={{
        headerStyle:{
          height:0,
        },
        headerLeft: null,
      }}/>
    <Stack.Screen name="Notification" component={NotificationScreen} 
      options={{
        headerStyle:{
          height:0,
        },
        headerLeft: null,
      }}/>
    <Stack.Screen name="About" component={AboutScreen} 
      options={{
        headerStyle:{
          height:0,
        },
        headerLeft: null,
      }}/>     
    </Stack.Navigator>
  );
}

export const LoginStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login"component={LoginScreen}  
      options={{
      headerStyle:{
          height:0,
      },
      headerLeft: null,
      }} />  
    <Stack.Screen name="Signup"component={SignUpScreen}  
      options={{
      headerStyle:{
          height:0,
      },
      headerLeft: null,
      }} />  
    </Stack.Navigator>
  );
}

export const SignUpStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Signup"component={SignUpScreen}  
      options={{
      headerStyle:{
          height:0,
      },
      headerLeft: null,
      }} />  
    </Stack.Navigator>
  );
}
