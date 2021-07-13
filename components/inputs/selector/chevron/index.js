import React from 'react';
import {View, Text} from 'react-native';
import styles from './index.styles';

const Chevron = ({down = true, up = false, left = false, right = false}) => {
  return (
    <View
      style={[
        styles.container,
        down && {transform: [{rotate: '0deg'}]},
        up && {transform: [{rotate: '180deg'}]},
        left && {transform: [{rotate: '90deg'}]},
        right && {transform: [{rotate: '-90deg'}]},
      ]}
    />
  );
};

export default Chevron;
