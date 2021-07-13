import React from 'react';
import {View, Text} from 'react-native';
import Counter from 'react-countdown';

// Renderer callback with condition
const renderer = ({formatted: {minutes, seconds}}) => (
  <Text style={{fontFamily: 'Poppins-Regular'}}>
    {minutes}:{seconds}
  </Text>
);

const minute = 60 * 1 * 1000;
const CountDown = ({time = minute, onComplete}) => (
  <Counter
    date={Date.now() + time}
    renderer={renderer}
    onComplete={onComplete}
  />
);

export default CountDown;
