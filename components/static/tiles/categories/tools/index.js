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
          x1={0.44}
          y1={0.29}
          x2={0.879}
          y2={1.029}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#fff2c4" />
          <Stop offset={1} stopColor="#fff8e0" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19148">
        <G data-name="Group 19146">
          <G transform="translate(0 .001)" filter="url(#prefix__a)">
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
          <G
            transform="translate(0 .001)"
            filter="url(#prefix__c)"
            data-name="Group 19145">
            <Path
              data-name="Union 9"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#f4dd89"
              opacity={0.8}
            />
          </G>
        </G>
        <Path
          data-name="Icon awesome-toolbox"
          d="M142.031 31.365l-2.883-2.889a2.039 2.039 0 00-1.442-.6h-3.235v-5.1a3.059 3.059 0 00-3.059-3.05h-10.2a3.059 3.059 0 00-3.055 3.059v5.1h-3.234a2.04 2.04 0 00-1.442.6l-2.881 2.88a2.039 2.039 0 00-.6 1.442v5.269h8.157v-1.02a1.019 1.019 0 011.02-1.02h2.039a1.019 1.019 0 011.02 1.02v1.02h8.157v-1.02a1.019 1.019 0 011.02-1.02h2.039a1.019 1.019 0 011.02 1.02v1.02h8.157v-5.27a2.039 2.039 0 00-.598-1.441zm-11.638-3.482h-8.157v-4.078h8.157zm4.079 13.255a1.019 1.019 0 01-1.02 1.02h-2.04a1.019 1.019 0 01-1.02-1.02v-1.02h-8.156v1.02a1.019 1.019 0 01-1.02 1.02h-2.039a1.019 1.019 0 01-1.02-1.02v-1.02H110v6.118a2.04 2.04 0 002.039 2.04h28.55a2.04 2.04 0 002.039-2.039v-6.118h-8.157z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
