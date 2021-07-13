import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {ArrowRight} from 'react-native-iconly';
import styles from './index.styles';
import {APP_PURPLE, WHITE} from '../../../constants';

const CustomButton = ({
  text,
  color = WHITE,
  fontSize = 14,
  fontWeight = 'normal',
  backgroundColor = APP_PURPLE,
  width = 128,
  height = 48,
  borderRadius = 12,
  disabled,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View
      style={{
        ...styles.container,
        backgroundColor: disabled ? backgroundColor + '88' : backgroundColor,
        width,
        height,
        borderRadius,
      }}>
      <Text style={{...styles.text, color, fontSize, fontWeight}}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;

CustomButton.defaultProps = {
  children: null,
  onPress: () => {},
};

CustomButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
