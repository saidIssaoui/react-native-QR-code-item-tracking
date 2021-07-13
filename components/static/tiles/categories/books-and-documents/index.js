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
          x1={0.205}
          y1={0.23}
          x2={0.937}
          y2={1.042}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#74cac4" />
          <Stop offset={1} stopColor="#e3fffd" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19156">
        <G data-name="Group 19144">
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
              data-name="Union 5"
              d="M39 142a30 30 0 01-30-30V67h92a30 30 0 0130 30v43.627a29.974 29.974 0 01-9 1.373zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#74cac4"
              opacity={0.8}
            />
          </G>
        </G>
        <G data-name="Iconly/Light/Document">
          <Path
            data-name="Stroke 4"
            d="M132.026 19.201l-11.4.007c-4.092.029-6.626 3.134-6.626 7.87v15.723c0 4.76 2.553 7.877 6.681 7.877l11.4-.005c7.1 0 6.627 1.759 6.627-7.872V27.078c0-4.76-2.554-7.877-6.682-7.877z"
            fill="#fff"
          />
          <Path
            data-name="Stroke 1"
            d="M137.772 42.239h-22.767M134.093 45.328h-15.482M129.683 48.416h-6.661"
            fill="none"
            stroke="#78cbc6"
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
