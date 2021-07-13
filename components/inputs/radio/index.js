import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Circle from './circle';
import styles from './index.styles';
import {APP_DARK_GRAY, APP_GRAY} from '../../../constants';

const Radio = ({
  text,
  color = APP_GRAY,
  selected = false,
  disabled,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.container}
    disabled={disabled}
    onPress={onPress}>
    <Circle selected={selected} color={color} />
    <Text
      style={{
        ...styles.text,
        color: selected ? color : APP_DARK_GRAY,
        fontFamily: selected ? 'Poppins-Medium' : 'Poppins-Regular',
        fontSize: selected ? 16 : 14,
      }}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Radio;

Radio.defaultProps = {
  children: null,
  onPress: () => {},
};

Radio.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
