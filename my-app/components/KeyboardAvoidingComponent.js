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
} from 'react-native';

const KeyboardAvoidingComponent = () => {
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
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
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
    flex: 0.8,
    justifyContent: 'space-around',
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    textAlign: 'center',
    // color: 'white',
    backgroundColor: 'rgba(0, 0, 0,0.5)',
    fontSize: 30,
    marginTop: 92,
    marginBottom: 48,
  },
  textInput: {
    height: 50,
    fontSize: 16,
    // padding: 16,
    height: 40,
    backgroundColor: '#E8E8E8',
    marginBottom: 36,
  },

  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
