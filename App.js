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

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <ImageBackground
          source={require('./img/photo_BG.png')}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <StatusBar style="auto" />
          {/* <RegistrationScreen /> */}
          <LoginScreen />
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}
