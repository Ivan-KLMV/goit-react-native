import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { LogOutSvgComponent } from './SVGs';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

const LogOutButton = () => {
  const dispatch = useDispatch();
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
        onPress={() => dispatch(logOut())}
      >
        <LogOutSvgComponent />
      </TouchableOpacity>
    </View>
  );
};

export default LogOutButton;
