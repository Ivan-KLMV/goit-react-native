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
    // <SafeAreaProvider>
    //   <View style={{ flex: 1, backgroundColor: 'white' }}>
    //     <View style={{ flex: 1, backgroundColor: 'orange' }}>
    //       <SafeAreaView style={{ flex: 1 }}>
    //         <View
    //           style={{
    //             flex: 1,
    //             justifyContent: 'flex-end',
    //           }}
    //         >
    //           <View
    //             style={{
    //               borderTopLeftRadius: 25,
    //               borderTopRightRadius: 25,
    //               backgroundColor: '#fff',
    //             }}
    //           >
    //             <Text style={styles.header}>Header</Text>
    //             <TextInput placeholder="Username" style={styles.textInput} />
    //             <TextInput placeholder="Username" style={styles.textInput} />
    //             <TextInput placeholder="Username" style={styles.textInput} />
    //             <View style={styles.btnContainer}>
    //               <Button title="Submit" onPress={() => null} />
    //             </View>
    //           </View>
    //         </View>
    //         {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
    //         {/* </TouchableWithoutFeedback> */}
    //       </SafeAreaView>
    //     </View>
    //   </View>
    // </SafeAreaProvider>
    // <SafeAreaProvider>
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </View>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
