import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Linking,
  Image,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import addIcon from '../img/add.svg';

const RegistrationScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  // console.log(isKeyboardVisible);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // behavior="position"
      style={styles.container}
      // contentContainerStyle={isKeyboardVisible ? { top: 70 } : { top: 0 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.avatarBox}></View>
          <Text style={styles.header}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          {!isKeyboardVisible && (
            <View>
              <Pressable>
                <Text style={styles.btn}>Зареєстуватися</Text>
              </Pressable>
              <TouchableWithoutFeedback>
                <Text style={styles.link}>Вже є акаунт? Увійти</Text>
              </TouchableWithoutFeedback>
            </View>
          )}
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
    // justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // border: 'none',
  },
  header: {
    textAlign: 'center',
    // color: 'white',
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    marginBottom: 32,
  },
  avatarBox: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    left: '50%',
    top: 0,
    marginLeft: -50,
    marginTop: -60,
  },
  textInput: {
    fontSize: 16,
    padding: 16,
    height: 50,
    backgroundColor: '#E8E8E8',
    marginBottom: 36,
    borderRadius: 5,
  },

  btn: {
    borderRadius: 50,
    fontSize: 16,
    backgroundColor: '#FF6C00',
    color: '#FFFFFF',
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  link: {
    marginTop: 16,
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 45,
  },
});

export default RegistrationScreen;
