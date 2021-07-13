import React from 'react';
import {View} from 'react-native';
import styles from './index.styles';
import {APP_GRAY} from '../../../../constants';

const Circle = ({color = APP_GRAY, selected = true}) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: color,
        width: selected ? 28 : 24,
        height: selected ? 28 : 24,
      }}>
      {selected && <View style={{...styles.inner, backgroundColor: color}} />}
    </View>
  );
};

export default Circle;
