import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {ArrowRight} from 'react-native-iconly';
import styles from './index.styles';
import {APP_PURPLE, WHITE} from '../../../../constants';

const RightArrow = <ArrowRight set="light" color={WHITE} size={48} />;

const NextButton = ({disabled}) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: disabled ? APP_PURPLE + '88' : APP_PURPLE,
    }}>
    {RightArrow}
  </View>
);

export default NextButton;

NextButton.defaultProps = {
  children: null,
  onPress: () => {},
};

NextButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
