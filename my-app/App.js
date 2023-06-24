import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import KeyboardAvoidingComponent from './components/KeyboardAvoidingComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./photo_BG.png')}
        style={{ height: '100%', width: '100%' }}
      >
        <KeyboardAvoidingComponent />
        {/* <Text>My first App!</Text> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
