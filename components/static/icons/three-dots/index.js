import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ThreeDots(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={5}
      height={24}
      viewBox="0 0 5 24"
      {...props}>
      <G data-name="Group 16758" fill="#666">
        <Path
          data-name="Fill 3"
          d="M0 2.532A2.512 2.512 0 012.486 0a2.513 2.513 0 012.488 2.532 2.513 2.513 0 01-2.488 2.533A2.512 2.512 0 010 2.532"
        />
        <Path
          data-name="Fill 5"
          d="M0 12a2.512 2.512 0 012.486-2.532A2.513 2.513 0 014.974 12a2.513 2.513 0 01-2.488 2.533A2.512 2.512 0 010 12"
        />
        <Path
          data-name="Fill 7"
          d="M0 21.468a2.512 2.512 0 012.486-2.532 2.513 2.513 0 012.488 2.532 2.513 2.513 0 01-2.488 2.533A2.512 2.512 0 010 21.468"
        />
      </G>
    </Svg>
  );
}

export default ThreeDots;
