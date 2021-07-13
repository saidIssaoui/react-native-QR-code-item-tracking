import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="12 9 29 29"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 17242">
        <G transform="translate(.003)" filter="url(#prefix__a)">
          <G
            data-name="Ellipse 44"
            transform="translate(13.5 10.5)"
            fill="#fff"
            stroke="#6b58e9"
            strokeWidth={1.5}>
            <Circle cx={13.5} cy={13.5} r={13.5} stroke="none" />
            <Circle cx={13.5} cy={13.5} r={12.75} fill="none" />
          </G>
        </G>
        <G
          data-name="Group 321"
          fill="none"
          stroke="#6b58e9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}>
          <Path d="M26.851 18.956v9.979M31.845 23.946h-9.988" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
