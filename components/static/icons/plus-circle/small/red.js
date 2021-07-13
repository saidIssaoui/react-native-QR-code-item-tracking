import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {APP_RED} from '../../../../../constants';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}>
      <G data-name="Group 19147">
        <G data-name="Group 16575">
          <G data-name="Ellipse 60" fill="none" stroke={APP_RED}>
            <Circle cx={9} cy={9} r={9} stroke="none" />
            <Circle cx={9} cy={9} r={8.5} />
          </G>
          <G
            fill="none"
            stroke={APP_RED}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            data-name="Iconly/Light/Plus">
            <Path d="M9 5.621v6.594M12.3 8.918H5.7" />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
