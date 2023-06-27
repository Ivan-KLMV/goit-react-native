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
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [isFocused, setFocus] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(true);

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

  const passwordShowHandler = () => {
    setPasswordShown(!isPasswordShown);
  };

  const focusHandler = (inputId) => {
    setFocus((prevFocusedInput) =>
      prevFocusedInput === inputId ? null : inputId
    );
  };

  const inputStyles = (inputId) => ({
    ...styles.textInput,
    borderColor: isFocused === inputId ? '#FF6C00' : '#E8E8E8',
    backgroundColor: isFocused === inputId ? '#ffffff' : '#F6F6F6',
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <Text style={styles.header}>Увійти</Text>
            <TextInput
              placeholder="Адреса електронної пошти"
              inputMode="text"
              placeholderTextColor="#BDBDBD"
              style={inputStyles(1)}
              onFocus={() => focusHandler(1)}
              onBlur={() => focusHandler(1)}
            />
            <View style={{ position: 'relative' }}>
              <TextInput
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={isPasswordShown}
                style={inputStyles(2)}
                onFocus={() => focusHandler(2)}
                onBlur={() => focusHandler(2)}
              />
              <TouchableWithoutFeedback
                onPress={passwordShowHandler}
                onPressIn={passwordShowHandler}
              >
                <Text
                  style={{
                    fontSize: 16,
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
          </View>
        </View>
      </SafeAreaView>
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
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 32,
  },
  textInput: {
    fontSize: 16,
    padding: 16,
    height: 50,
    marginBottom: 16,
    borderRadius: 5,
    borderWidth: 1,
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
