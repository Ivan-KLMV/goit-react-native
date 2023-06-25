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
  Image,
  TouchableHighlightComponent,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import addIcon from '../img/add.svg';
import { TouchableHighlight } from 'react-native';

const RegistrationScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(true);

  const passwordShowHandler = () => {
    setPasswordShown((state) => !state);
  };

  useEffect(() => {
    console.log(isKeyboardVisible);
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
        // behavior="position"
        style={styles.container}
        // contentContainerStyle={isKeyboardVisible ? { top: 70 } : { top: 0 }}
      >
        <View style={styles.inner}>
          <View style={styles.avatarBox}>
            <Image
              source={require('../img/add.png')}
              style={{
                width: 25,
                height: 25,
                position: 'absolute',
                right: -12,
                top: 75,
              }}
            />
          </View>
          <Text style={styles.header}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            inputMode="text"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            inputMode="email"
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
                <Text style={styles.btn}>Зареєстуватися</Text>
              </TouchableHighlight>
              <TouchableWithoutFeedback>
                <Text style={styles.link}>Вже є акаунт? Увійти</Text>
              </TouchableWithoutFeedback>
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
    marginBottom: 45,
  },
});

export default RegistrationScreen;
