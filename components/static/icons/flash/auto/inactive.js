import * as React from 'react';
import Svg, {G, Path, Text, TSpan} from 'react-native-svg';

function SvgComponent({big}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={big ? 32 : 17.506}
      height={big ? 32 : 22.501}
      viewBox="0 0 17.506 22.501">
      <G data-name="Group 19148">
        <G data-name="Group 17353">
          <Path
            d="M16.361 7.101a1 1 0 00-.87-.6h-4.58l1.27-4.74a1 1 0 00-.96-1.26h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 00.97 1.26h3.87l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07z"
            fill="none"
            stroke={big ? 'white' : '#6462fb'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Text
            transform="translate(12.506 20.501)"
            fill={big ? 'white' : '#6462fb'}
            fontSize={7}
            fontFamily="Poppins-Regular, Poppins"
            letterSpacing="-.019em">
            <TSpan x={0} y={0}>
              {'A'}
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
