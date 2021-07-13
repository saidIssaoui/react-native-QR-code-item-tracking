import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.414}
      height={23.25}
      viewBox="0 0 22.414 23.25"
      {...props}>
      <G data-name="Group 17354" stroke="#6462fb" strokeLinecap="round">
        <Path
          d="M19.093 9.307a1 1 0 00-.87-.6h-4.58l1.27-4.74a1 1 0 00-.96-1.26h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 00.97 1.26h3.87l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07z"
          fill="#6563ff"
          strokeLinejoin="round"
        />
        <Path data-name="Line 1989" fill="none" d="M21.707.707l-21 21" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
