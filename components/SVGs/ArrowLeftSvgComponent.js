import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export function ArrowLeftSvgComponent(props) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          //   backgroundColor: 'red',
          width: 42,
          height: 42,
          borderBottomRightRadius: 4,
          borderTopRightRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Публікації')}
      >
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G
            stroke="#212121"
            strokeOpacity={0.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M20 12H4M10 18l-6-6 6-6" />
          </G>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
