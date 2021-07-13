import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from 'react-native-svg';
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
          x1={0.147}
          y1={0.059}
          x2={1.112}
          y2={1.132}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#886def" />
          <Stop offset={1} stopColor="#d1c6fd" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19149">
        <G data-name="Group 19136">
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
              data-name="Union 2"
              d="M39 142a30 30 0 01-30-30V67h68a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#886def"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Group 18985">
          <G data-name="Group 18858">
            <Path
              d="M134.09 20.491h-13.828c-4.82 0-7.841 3.411-7.841 8.241V41.76c0 4.831 3.007 8.241 7.841 8.241h13.828c4.834 0 7.841-3.411 7.841-8.241V28.732c0-4.83-3.01-8.241-7.841-8.241z"
              fill="#fff"
            />
            <G
              data-name="Group 18856"
              stroke="#7250f2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={1.25}>
              <Path
                data-name="Path"
                d="M132.452 29.375h-10.197c-3.555 0-5.783 1.6-5.783 3.861v6.1c0 2.262 2.218 3.861 5.783 3.861h10.2c3.565 0 5.783-1.6 5.783-3.861v-6.1c-.003-2.261-2.221-3.861-5.786-3.861z"
                fill="#fff"
              />
              <G
                data-name="Group 18855"
                transform="translate(120.544 33.447)"
                fill="none">
                <Circle
                  cx={2.678}
                  cy={2.678}
                  transform="translate(9.793)"
                  r={2.678}
                />
                <Circle
                  data-name="Ellipse_740"
                  cx={2.678}
                  cy={2.678}
                  r={2.678}
                />
              </G>
            </G>
          </G>
          <Path
            data-name="Path"
            d="M147.817 29.993h-2.086c-.727 0-1.183 1.237-1.183 2.988v4.725c0 1.751.454 2.987 1.183 2.987h2.086c.731 0 1.183-1.236 1.183-2.987v-4.725c0-1.751-.452-2.988-1.183-2.988zM106.817 29.993h2.086c.731 0 1.182 1.237 1.182 2.988v4.725c0 1.751-.451 2.987-1.182 2.987h-2.086c-.729 0-1.183-1.236-1.183-2.987v-4.725c0-1.751.454-2.988 1.183-2.988z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
