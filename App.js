import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
// import PostScreen from './Screens/PostsScreen';
import HomePage from './Screens/HomePage';
import MapScreen from './Screens/MapScreen';

export default function App() {
  const [isLogined, setIslogined] = useState(true);

  const loginHandler = (value) => {
    console.log('loginHandler is pressed, isLogined:', isLogined);

    setIslogined(value);
  };

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      {isLogined ? (
        <MainStack.Navigator>
          <MainStack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerShown: false,
            }}
            initialParams={{ loginHandler }}
          />
          <MainStack.Screen name="MapScreen" component={MapScreen} />
        </MainStack.Navigator>
      ) : (
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{ headerShown: false }}
            initialParams={{ loginHandler }}
          />
          <MainStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
            initialParams={{ loginHandler }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}
