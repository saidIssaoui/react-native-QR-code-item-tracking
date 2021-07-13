import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({big = false}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={big ? 32 : 16.963}
      height={big ? 32 : 21.044}
      viewBox="0 0 16.963 21.044">
      <Path
        d="M16.362 7.101a1 1 0 00-.87-.6h-4.58l1.27-4.74a1 1 0 00-.96-1.26h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 00.97 1.26h3.87l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07z"
        fill="none"
        stroke={big ? 'white' : '#6462fb'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
