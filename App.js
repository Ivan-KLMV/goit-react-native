import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('reg');
  const currentPageHandler = (currentPage) => {
    setPage(currentPage);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('./img/photo_BG.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        resizeMode="cover"
      ></ImageBackground>
      {page === 'reg' ? (
        <RegistrationScreen currentPage={currentPageHandler} />
      ) : (
        <LoginScreen currentPage={currentPageHandler} />
      )}
    </View>
  );
}
