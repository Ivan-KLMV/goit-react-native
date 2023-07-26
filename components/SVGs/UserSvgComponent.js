import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export function UserSvgComponent(props) {
  return (
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
        <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11a4 4 0 100-8 4 4 0 000 8z"
        />
      </G>
    </Svg>
  );
}
