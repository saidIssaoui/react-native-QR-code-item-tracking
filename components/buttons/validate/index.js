import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {ArrowRight} from 'react-native-iconly';
import styles from './index.styles';
import {APP_PURPLE, WHITE} from '../../../constants';

const RightArrow = <ArrowRight set="light" color={WHITE} size={36} />;

const ValidateButton = ({disabled, onPress}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View
      style={{
        ...styles.container,
        backgroundColor: disabled ? APP_PURPLE + '88' : APP_PURPLE,
      }}>
      {RightArrow}
    </View>
  </TouchableOpacity>
);

export default ValidateButton;

ValidateButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ValidateButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
