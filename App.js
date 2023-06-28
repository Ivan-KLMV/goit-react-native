import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight } from 'react-native';
import { Platform } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
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
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  );
}
