import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <ImageBackground
          source={require('./img/photo_BG.png')}
          style={{ flex: 1 }}
        >
          <StatusBar style="auto" />
          {/* <RegistrationScreen /> */}
          <LoginScreen />
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}
