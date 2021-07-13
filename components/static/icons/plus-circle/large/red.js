import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';
import {APP_RED, WHITE} from '../../../../../constants';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="11 8 54 54"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 341">
        <G transform="translate(-.003 .002)" filter="url(#prefix__a)">
          <G
            data-name="Ellipse 44"
            transform="translate(13.5 10.5)"
            fill={WHITE}
            stroke={APP_RED}
            strokeWidth={3}>
            <Circle cx={25} cy={25} r={25} stroke="none" />
            <Circle cx={25} cy={25} r={23.5} fill="none" />
          </G>
        </G>
        <G
          data-name="Group 321"
          fill="none"
          stroke="#6b58e9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={3}>
          <Path d="M38.796 26.693v17.979M47.798 35.683h-18" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
