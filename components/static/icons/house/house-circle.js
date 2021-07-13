import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.445}
      height={23.675}
      viewBox="0 0 22.445 23.675"
      {...props}>
      <G data-name="Group 17663" fill="none" stroke="#7250f2">
        <Path
          d="M15.75 22.925h2.121a3.809 3.809 0 003.828-3.79h0V9.518a2.689 2.689 0 00-1.06-2.1l-7.258-5.785a3.506 3.506 0 00-4.348 0L1.81 7.429a2.668 2.668 0 00-1.06 2.1v9.607a3.809 3.809 0 003.828 3.79H15.75z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <G data-name="Ellipse 1304" transform="translate(7.941 5.845)">
          <Circle cx={3.5} cy={3.5} r={3.5} stroke="none" />
          <Circle cx={3.5} cy={3.5} r={3} />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
