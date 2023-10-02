import { useState } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../src/Screens/RegistrationScreen';
import LoginScreen from '../src/Screens/LoginScreen';
import HomePage from '../src/Screens/HomePage';
import MapScreen from '../src/Screens/MapScreen';
import CommentsScreen from '../src/Screens/CommentsScreen';
import { isUserLoggedIn } from './redux/authSlice';
import { loginDB, registerDB } from './firrebase/authUtils';

export const AppNavigation = () => {
  const reduxState = useSelector((state) => state.auth);
  console.log('reduxState', reduxState);
  const isLoggedIn = useSelector(isUserLoggedIn);
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainStack.Navigator>
          <MainStack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen name="MapScreen" component={MapScreen} />
          <MainStack.Screen name="Коментарі" component={CommentsScreen} />
        </MainStack.Navigator>
      ) : (
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};
