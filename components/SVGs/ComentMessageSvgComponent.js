import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ComentMessageSvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11.5a8.38 8.38 0 00.9 3.8 8.5 8.5 0 007.6 4.7 8.38 8.38 0 003.8-.9L21 21l-1.9-5.7a8.38 8.38 0 00.9-3.8 8.5 8.5 0 00-4.7-7.6 8.38 8.38 0 00-3.8-.9H11a8.48 8.48 0 00-8 8v.5z"
        fill="#FF6C00"
      />
    </Svg>
  );
}

export default ComentMessageSvgComponent;
