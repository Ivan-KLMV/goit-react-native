import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function GridSvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z"
        stroke="#212121"
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
