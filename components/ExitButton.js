import Svg, { Image } from 'react-native-svg';
import LogOutSvgComponent from './LogOutSvgComponent';

const { TouchableOpacity, View } = require('react-native');

const ExitButton = ({ myProp }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 42,
          height: 42,
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => myProp(false)}
      >
        <LogOutSvgComponent />
      </TouchableOpacity>
    </View>
  );
};

export default ExitButton;
