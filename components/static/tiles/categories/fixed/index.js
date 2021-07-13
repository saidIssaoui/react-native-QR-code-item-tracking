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
          x1={0.206}
          y1={0.091}
          x2={0.873}
          y2={0.943}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#f8c5c3" />
          <Stop offset={1} stopColor="#ffe2e2" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 19154">
        <G data-name="Group 19142">
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
              data-name="Union 7"
              d="M39 142a30 30 0 01-30-30V67h57a30 30 0 0130 30v45zm87-77a30 30 0 01-30-30V6h26a30 30 0 0130 30v29z"
              fill="#fabbb8"
              opacity={0.8}
            />
          </G>
        </G>
        <Path
          data-name="Icon metro-tools"
          d="M139.706 24.558a6.577 6.577 0 01-9.323 8.251l-1.819 1.987 1.3 1.3.776-.776a1.014 1.014 0 011.436 0l6.291 6.355a1.014 1.014 0 010 1.436l-2.878 2.876a1.014 1.014 0 01-1.436 0l-6.291-6.355a1.014 1.014 0 010-1.436l.709-.709-1.237-1.24-8.7 9.5a2.03 2.03 0 01-2.871 0l-.718-.718a2.03 2.03 0 010-2.871l9.911-8.3-6.583-6.6h-2.076l-2.408-3.866 1.939-1.94 3.961 2.422.026 2.036 6.659 6.685 1.937-1.622a6.584 6.584 0 017.8-10l-4.27 4.21 3.59 3.59 4.274-4.215zm-22.377 18.617a1.016 1.016 0 100 1.437 1.016 1.016 0 000-1.437z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
