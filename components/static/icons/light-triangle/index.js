import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function LightTriangle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={28}
      viewBox="0 0 31 28"
      {...props}>
      <G
        data-name="Icon material-details"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M2 2l13.5 24L29 2z" />
        <Path
          d="M2 2l13.5 24L29 2H2m0-2h27a2 2 0 011.743 2.98l-13.5 24a2 2 0 01-3.486 0l-13.5-24A2 2 0 012 0z"
          fill="#7250f2"
        />
      </G>
    </Svg>
  );
}

export default LightTriangle;
