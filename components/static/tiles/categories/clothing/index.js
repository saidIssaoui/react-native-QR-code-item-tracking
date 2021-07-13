import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';
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
          x1={0.17}
          y1={0.042}
          x2={1.075}
          y2={1.195}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#f7c544" />
          <Stop offset={1} stopColor="#ffefc7" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19153">
        <G data-name="Group 19140">
          <G filter="url(#prefix__a)" transform="translate(0 .001)">
            <Path
              data-name="Rectangle"
              d="M30 0h83a30 30 0 0130 30v76a30 30 0 01-30 30H30a30 30 0 01-30-30V30A30 30 0 0130 0z"
              transform="translate(9 6)"
              opacity={0.8}
              fill="url(#prefix__b)"
            />
          </G>
          <G filter="url(#prefix__c)" transform="translate(0 .001)">
            <Path
              data-name="Union 4"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#f7c544"
              opacity={0.8}
            />
          </G>
        </G>
        <Path
          d="M129.26 20.251s-2.478 3.4-5.035 3.4-5.199-3.4-5.199-3.4c-1.184 0-11.096 3.821-12.213 4.692-.928.7.217 6.623 3.249 8.889 1.329.988 5.117-.807 5.1-.667v8.38c0 4.678.29 7.291 3.866 7.291h10.232c6.27 0 5.8-2.613 5.8-7.291v-8.38c0-.542 2.355 1.8 3.7.667 2.542-2.148 5.881-7.715 5.253-8.889-.544-1.027-14.027-4.692-14.753-4.692z"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
