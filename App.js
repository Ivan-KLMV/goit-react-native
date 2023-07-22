import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const [page, setPage] = useState('reg');
  const currentPageHandler = (currentPage) => {
    setPage(currentPage);
  };

  // const Tab = createBottomTabNavigator();

  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
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
      {/* <Tab.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="RegistrationScreen" component={RegistrationScreen} /> */}
      {/* <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <ImageBackground
            source={require('./img/photo_BG.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
            resizeMode="cover"
          ></ImageBackground>
          {page === 'reg' ? (
            <RegistrationScreen currentPage={currentPageHandler} />
          ) : (
            <LoginScreen currentPage={currentPageHandler} />
          )}
        </View> */}
    </NavigationContainer>
  );
}
