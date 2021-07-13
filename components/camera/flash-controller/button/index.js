import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './index.styles';

const Button = ({icon, flex = 3, disabled, onPress}) => (
  <TouchableOpacity
    style={{...styles.container, flex}}
    disabled={disabled}
    onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export default Button;
