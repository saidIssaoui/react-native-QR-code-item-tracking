import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={161}
      height={154.001}
      viewBox="0 0 161 154.001"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.351}
          y1={0.222}
          x2={0.891}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#cff5d5" />
          <Stop offset={1} stopColor="#edfff0" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19150">
        <G data-name="Group 19137">
          <G filter="url(#prefix__a)" transform="translate(0 .001)">
            <Rect
              data-name="Rectangle"
              width={143}
              height={136}
              rx={30}
              transform="translate(9 6)"
              opacity={0.8}
              fill="url(#prefix__b)"
            />
          </G>
          <G filter="url(#prefix__c)" transform="translate(0 .001)">
            <Path
              data-name="Union 1"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#a7dbaf"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Iconly/Light/Bag 2">
          <G data-name="Bag 2">
            <Path
              data-name="Stroke 1"
              d="M131.915 28.843v-5.155a6.429 6.429 0 00-12.858-.029v5.185"
              fill="none"
              stroke="#feffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={1.5}
            />
            <Path
              data-name="Stroke 3"
              d="M133.563 48.73h-16.127a7.237 7.237 0 01-7.24-7.235v-9.38a7.237 7.237 0 017.24-7.235h16.127a7.237 7.237 0 017.24 7.235v9.379a7.237 7.237 0 01-7.24 7.236z"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
