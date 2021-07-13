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
          x1={1}
          y1={1.069}
          x2={0.18}
          y2={0.169}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#e2d9d5" />
          <Stop offset={1} stopColor="#ddc3b4" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19151">
        <G data-name="Group 19143">
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
              data-name="Union 8"
              d="M40 140a30 30 0 01-30-30V65h57a30 30 0 0130 30v45zm86-75a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#d5c7c0"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Group 18984" transform="translate(-188 -580.032)">
          <Path
            data-name="Icon map-furniture-store"
            d="M325.312 602h-26.748a1.621 1.621 0 00-1.564 1.556 1.62 1.62 0 001.564 1.556h.378v3.112h26.032v-3.112h.34a1.62 1.62 0 001.56-1.556 1.62 1.62 0 00-1.562-1.556zm-13.374 3.816a.8.8 0 11.782-.8.793.793 0 01-.782.8zm-13 10.36h26.036v-4.978h-26.032zm13-3.345a.8.8 0 11-.782.8.792.792 0 01.782-.8zm-13 9.367v3.619c0 .442.055.8.485.8h3.131c.43 0 .625-.362.625-.8v-2.309h17.556v2.309c0 .442.157.8.586.8h3.128c.429 0 .523-.362.523-.8v-6.666h-26.03zm13-1.608a.8.8 0 11-.782.8.793.793 0 01.782-.8z"
            fill="#fff"
          />
          <Circle
            data-name="Ellipse 1305"
            cx={1}
            cy={1}
            r={1}
            transform="translate(311 604)"
            fill="#d5c8c1"
          />
          <Circle
            data-name="Ellipse 1306"
            cx={1}
            cy={1}
            r={1}
            transform="translate(311 612)"
            fill="#d5c8c1"
          />
          <Circle
            data-name="Ellipse 1307"
            cx={1}
            cy={1}
            r={1}
            transform="translate(311 620)"
            fill="#d5c8c1"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
