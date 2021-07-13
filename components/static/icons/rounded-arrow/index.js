import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={80.404}
      height={154.553}
      viewBox="0 0 80.404 154.553"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#9e92f6" />
          <Stop offset={0} stopColor="#6f5dea" />
          <Stop offset={1} stopColor="#9c90f6" />
          <Stop offset={1} stopColor="#6b58e9" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19147">
        <Path
          data-name="Path 11160"
          d="M.512.564c118.336-3.035 75.115 91.568 54.073 98.45s-39.1-4.666-30.856-30.775 43.874-28.415 43.109 9.163-47.39 63.342-47.39 63.342"
          fill="none"
          stroke="#6b58e9"
          strokeLinecap="round"
        />
        <Path
          data-name="Path 11161"
          d="M0 0h16.5L8.7 14.893z"
          transform="rotate(48.01 -139.619 86.378)"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
