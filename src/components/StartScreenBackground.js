const { StatusBar } = require('expo-status-bar');
import { ImageBackground, View } from 'react-native';

const StartScreenBackground = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../img/photo_BG.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        resizeMode="cover"
      ></ImageBackground>
      {children}
    </View>
  );
};

export default StartScreenBackground;
