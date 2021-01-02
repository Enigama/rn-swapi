//import react
import React from "react";

//import navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import Preview from "../screens/Preview";

const Stack = createStackNavigator();

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          color: '#ffd54e',
        },
        cardStyle: {
          backgroundColor: 'transparent'
        }
      })}>
        <Stack.Screen options={() => ({
          headerShown: false
        })
        } name="Home" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
