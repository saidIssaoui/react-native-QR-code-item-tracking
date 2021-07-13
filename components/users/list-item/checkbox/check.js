import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Check(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.707 19.121a.997.997 0 01-1.414 0l-5.646-5.647a1.5 1.5 0 010-2.121l.707-.707a1.5 1.5 0 012.121 0L9 14.171l9.525-9.525a1.5 1.5 0 012.121 0l.707.707a1.5 1.5 0 010 2.121z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default Check;
