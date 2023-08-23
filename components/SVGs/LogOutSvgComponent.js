import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export function LogOutSvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M10 22H5a2 2 0 01-2-2V4a2 2 0 012-2h5M17 16l4-4-4-4M21 12H9" />
      </G>
    </Svg>
  );
}
