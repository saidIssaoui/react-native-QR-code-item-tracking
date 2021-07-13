import React from 'react';
import Svg, {Defs, G, Path, LinearGradient, Stop, Rect} from 'react-native-svg';
const Stripped = ({width = 64, height = 64}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 103.914 103.909">
      <Defs>
        <LinearGradient
          id="linear-gradient"
          y1="2.902"
          x2="1"
          y2="2.902"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#7250f2" />
          <Stop offset="0.06" stopColor="#7f61f6" />
          <Stop offset="0.15" stopColor="#8e73fa" />
          <Stop offset="0.25" stopColor="#9880fd" />
          <Stop offset="0.39" stopColor="#9e88ff" />
          <Stop offset="0.66" stopColor="#a08aff" />
        </LinearGradient>
      </Defs>
      <G
        id="phareme_vertic"
        dataName="phareme vertic"
        transform="translate(-4.156 0)">
        <Path
          id="Tracé_27"
          dataName="Tracé 27"
          d="M816.5,312.2a23.841,23.841,0,0,0-24.135,23.544v.045l-.05,4.068-.224,19.793,23.792.268h.07A23.863,23.863,0,0,0,816.5,312.2Zm-.407,35.266h-.03l-11.389-.253.109-9.348v-1.927A11.424,11.424,0,1,1,816.076,347.5h0Z"
          transform="translate(-753.826 -294.761)"
          fill="url(#linear-gradient)"
        />
        <Path
          id="Tracé_28"
          dataName="Tracé 28"
          d="M89.262,92.645,76.83,92.466l.035-6.219.079-4.411.065-1.987H89.486l-.1,1.008Z"
          transform="translate(-38.417 -40.189)"
          fill="#ee736f"
        />
        <Path
          id="Tracé_29"
          dataName="Tracé 29"
          d="M768.556,385.253v7.008h-7.013v-7.008h7.013m2.608-2.6H758.94v12.224h12.224V382.65Z"
          transform="translate(-737.142 -330.219)"
          fill="#7250f2"
        />
        <Path
          id="Tracé_30"
          dataName="Tracé 30"
          d="M830.091,395.366h-2.3c-1.346-.025-5.4-.06-5.4-.06l-4.917-.055-.05-12.581,12.671.253Z"
          transform="translate(-766.575 -330.229)"
          fill="#f7c544"
        />
        <Rect
          id="Rectangle_466"
          dataName="Rectangle 466"
          width="3.954"
          height="3.954"
          transform="translate(25.931 56.564)"
          fill="#7250f2"
        />
        <Path
          id="Tracé_31"
          dataName="Tracé 31"
          d="M801.856,418.728v7.013h-7.013v-7.013h7.013m2.608-2.608H792.24v12.224h12.224Z"
          transform="translate(-753.901 -347.064)"
          fill="#59c4bd"
        />
        <Rect
          id="Rectangle_467"
          dataName="Rectangle 467"
          width="3.954"
          height="3.954"
          transform="translate(42.476 73.193)"
          fill="#59c4bd"
        />
      </G>
    </Svg>
  );
};

export default Stripped;
