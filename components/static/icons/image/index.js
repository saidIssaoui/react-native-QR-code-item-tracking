import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {APP_PURPLE} from '../../../../constants';

function SvgComponent({fill = APP_PURPLE, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={62}
      height={62}
      viewBox="0 0 62 62"
      {...props}>
      <G data-name="Group 17589">
        <Path
          data-name="Path 11139"
          d="M31 0A31 31 0 110 31 31 31 0 0131 0z"
          fill={fill}
          opacity={0.5}
        />
        <Path
          data-name="Icon awesome-image"
          d="M43.212 42.693h-23.5A2.712 2.712 0 0117 39.981V23.712A2.712 2.712 0 0119.712 21h23.5a2.712 2.712 0 012.712 2.712v16.269a2.712 2.712 0 01-2.712 2.712zm-19.885-18.53a3.163 3.163 0 103.163 3.164 3.163 3.163 0 00-3.163-3.164zm-2.712 14.914h21.693V32.75l-4.944-4.944a.678.678 0 00-.959 0l-7.655 7.656-3.136-3.136a.678.678 0 00-.959 0l-4.04 4.04z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
