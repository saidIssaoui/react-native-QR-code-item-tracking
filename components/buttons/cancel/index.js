import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeft} from 'react-native-iconly';
import styles from './index.styles';
import {APP_PURPLE} from '../../../constants';

const LeftArrow = <ArrowLeft set="light" color={APP_PURPLE} size={48} />;
const LeftArrowGray = <ArrowLeft set="light" color={APP_PURPLE} size={48} />;

const CancelButton = ({text, disabled, onPress}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    {text ? (
      <View style={{...styles.container}}>
        <Text>{text}</Text>
      </View>
    ) : (
      <View style={{...styles.container}}>
        {disabled ? LeftArrowGray : LeftArrow}
      </View>
    )}
  </TouchableOpacity>
);

export default CancelButton;

CancelButton.defaultProps = {
  children: null,
  onPress: () => {},
};

CancelButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
