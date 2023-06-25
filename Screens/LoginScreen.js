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
  TouchableHighlight,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import addIcon from '../img/add.svg';

const LoginScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(true);

  const passwordShowHandler = () => {
    setPasswordShown((state) => !state);
  };

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Text style={styles.header}>Увійти</Text>
          <TextInput
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={isPasswordShown}
              style={styles.textInput}
            />
            <TouchableWithoutFeedback
              onPress={passwordShowHandler}
              onPressIn={passwordShowHandler}
            >
              <Text
                style={{
                  position: 'absolute',
                  right: 16,
                  top: 13,
                  color: '#1B4371',
                }}
              >
                Показати
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {!isKeyboardVisible && (
            <View>
              <TouchableHighlight>
                <Text style={styles.btn}>Увійти</Text>
              </TouchableHighlight>
              <Text style={styles.link}>
                Немає акаунту?
                <TouchableWithoutFeedback>
                  <Text style={{ textDecorationLine: 'underline' }}>
                    Зареєструватися
                  </Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          )}
          {/* <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} color="#FF6C00" />
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  inner: {
    padding: 16,
    // flex: 0.8,
    justifyContent: 'space-around',
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
    marginTop: 32,
    marginBottom: 32,
  },
  textInput: {
    fontSize: 16,
    padding: 16,
    height: 50,
    backgroundColor: '#E8E8E8',
    marginBottom: 16,
    borderRadius: 5,
  },

  btn: {
    marginTop: 27,
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
    marginBottom: 111,
  },
});

export default LoginScreen;
