import React from 'react';
import {View, Text} from 'react-native';
import styles from './index.styles';

const ACTIVE_COLOR = '#a08aff';
const INACTIVE_COLOR = '#aaaaaa';

const ToggleButton = ({active = true}) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: active ? ACTIVE_COLOR : INACTIVE_COLOR,
      alignItems: active ? 'flex-end' : 'flex-start',
    }}>
    <View style={{...styles.innerCircle}} />
  </View>
);

export default ToggleButton;
