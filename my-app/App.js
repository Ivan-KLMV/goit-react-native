import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/photo_BG.png')}
        style={{ height: '100%', width: '100%' }}
      >
        {/* <StatusBar style="auto" /> */}
        <View style={{ position: 'relative' }}></View>
        <RegistrationScreen />

        {/* <LoginScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
