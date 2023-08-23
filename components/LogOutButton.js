import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { LogOutSvgComponent } from './SVGs';

const LogOutButton = ({ loginHandler }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          width: 42,
          height: 42,
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => loginHandler(false)}
      >
        <LogOutSvgComponent />
      </TouchableOpacity>
    </View>
  );
};

export default LogOutButton;
