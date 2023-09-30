import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import StartScreenBackground from '../components/StartScreenBackground';
import { AddSvgComponent } from '../components/SVGs';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authSlice';

const RegistrationScreen = (props) => {
  const [isFocused, setFocus] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(true);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  const onLogin = () => {
    if (!login || !email || !password) {
      ToastAndroid.show(
        'Будь ласка, заповніть всі поля для реєстрації!',
        ToastAndroid.SHORT
      );
      return;
    }
    ToastAndroid.show(
      `Login: ${login}
     Email: ${email}`,
      ToastAndroid.SHORT
    );
    console.log('Login', login);
    console.log('Email', email);
    console.log('Password', password);

    // loginHandler(true);
    dispatch(logIn());
  };

  return (
    <StartScreenBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.avatarBox}>
              <AddSvgComponent
                fill="#FF6C00"
                style={{ position: 'absolute', right: -12, top: 75 }}
              />
            </View>
            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              inputMode="text"
              placeholderTextColor="#BDBDBD"
              style={inputStyles(1)}
              onFocus={() => focusHandler(1)}
              onBlur={() => focusHandler(1)}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              inputMode="email"
              placeholderTextColor="#BDBDBD"
              style={inputStyles(2)}
              onFocus={() => focusHandler(2)}
              onBlur={() => focusHandler(2)}
            />
            <View style={{ position: 'relative' }}>
              <TextInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#BDBDBD"
                secureTextEntry={isPasswordShown}
                style={inputStyles(3)}
                onFocus={() => focusHandler(3)}
                onBlur={() => focusHandler(3)}
              />
              <TouchableWithoutFeedback onPress={passwordShowHandler}>
                <Text
                  style={{
                    fontSize: 16,
                    position: 'absolute',
                    right: 16,
                    top: 13,
                    color: '#1B4371',
                  }}
                >
                  {isPasswordShown ? 'Показати' : 'Сховати'}
                </Text>
              </TouchableWithoutFeedback>
            </View>
            {!isKeyboardVisible && (
              <View>
                <TouchableOpacity activeOpacity={0.7} onPress={onLogin}>
                  <View style={styles.btn}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
                      Зареєстуватися
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    marginBottom: 45,
                    marginTop: 16,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableHighlight
                    underlayColor="#d3d3d3"
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={{ borderRadius: 5 }}
                  >
                    <Text style={styles.link}>Вже є акаунт? Увійти</Text>
                  </TouchableHighlight>
                </View>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </StartScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    textAlign: 'center',
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
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 5,
  },
  btn: {
    marginTop: 27,
    borderRadius: 50,
    backgroundColor: '#FF6C00',
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
  link: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
