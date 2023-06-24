import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Pressable,
} from 'react-native';

const RegistrationScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Registration</Text>
          <TextInput
            placeholder="Login"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <Pressable>
            <Text>Submit</Text>
          </Pressable>
          {/* <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} color="#FF6C00" />
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    padding: 16,
    // flex: 0.8,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    border: 'none',
  },
  header: {
    textAlign: 'center',
    // color: 'white',
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    marginBottom: 32,
  },
  textInput: {
    fontSize: 16,
    padding: 16,
    height: 50,
    backgroundColor: '#E8E8E8',
    marginBottom: 36,
    borderRadius: 1,
  },

  btnContainer: {
    marginTop: 27,
    marginBottom: 80,
    // borderRadius: 100,
  },
});

export default RegistrationScreen;
