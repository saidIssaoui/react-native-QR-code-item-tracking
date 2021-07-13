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
          x1={0.156}
          y1={0.076}
          x2={0.873}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#ec8987" />
          <Stop offset={1} stopColor="#f7b4b3" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19155">
        <G data-name="Group 19141">
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
              data-name="Union 6"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#ec8987"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Iconly/Light/Document">
          <Path
            data-name="Stroke 4"
            d="M132.351 20.645l-11.759.006c-4.221.026-6.835 2.803-6.835 7.04v14.063c0 4.258 2.634 7.046 6.891 7.046h11.759c4.221-.026 6.836-2.8 6.836-7.041V27.691c0-4.258-2.635-7.046-6.892-7.046z"
            fill="#fff"
          />
          <Path
            data-name="Stroke 1"
            d="M132.057 41.251h-11.042"
            fill="none"
            stroke="#eb8c8b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
          />
          <Path
            data-name="Stroke 2"
            d="M132.057 34.848h-11.042"
            fill="none"
            stroke="#eb8c8b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
          />
          <Path
            data-name="Stroke 3"
            d="M125.228 28.46h-4.213"
            fill="none"
            stroke="#eb8c8b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
