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
          x1={0.14}
          y1={0.074}
          x2={1.06}
          y2={1.121}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#c5b8f9" />
          <Stop offset={1} stopColor="#e7e0ff" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19152">
        <G data-name="Group 19139">
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
            data-name="Group 19138">
            <Path
              data-name="Union 3"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#c5b8f9"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Group 18983">
          <Path
            data-name="Path 11263"
            d="M141.745 28.633a18.14 18.14 0 101.421 7.039 18.024 18.024 0 00-1.421-7.039z"
            fill="#fff"
          />
          <Path
            data-name="Path 11262"
            d="M113.283 31.319a.807.807 0 00.892.048 52.637 52.637 0 0121.817 0 .806.806 0 001.147-1.02 13.181 13.181 0 00-24.111 0 .8.8 0 00.255.972z"
            fill="#c6baf8"
          />
          <Path
            data-name="Path 11264"
            d="M138.254 35.26a.806.806 0 00-1.068-.737 15.786 15.786 0 00-6.175 3.864 18.359 18.359 0 00-4.732 9.333.806.806 0 00.917.961 13.179 13.179 0 0011.064-13.008c0-.135-.002-.27-.006-.413z"
            fill="#c6baf8"
          />
          <Path
            data-name="Path 11265"
            d="M128.426 35.672a3.343 3.343 0 10-3.343 3.343 3.347 3.347 0 003.343-3.343z"
            fill="#c6baf8"
          />
          <Path
            data-name="Path 11266"
            d="M119.157 38.386a15.784 15.784 0 00-6.175-3.864.806.806 0 00-1.068.737c0 .144-.007.279-.007.413a13.18 13.18 0 0011.065 13.008.806.806 0 00.917-.961 18.359 18.359 0 00-4.732-9.333z"
            fill="#c6baf8"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
