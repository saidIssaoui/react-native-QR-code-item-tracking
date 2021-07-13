import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {ArrowLeft} from 'react-native-iconly';
import styles from './index.styles';
import {APP_PURPLE} from '../../../../constants';

const LeftArrow = <ArrowLeft set="light" color={APP_PURPLE} size={48} />;
const LeftArrowGray = <ArrowLeft set="light" color={APP_PURPLE} size={48} />;

const PreviousButton = ({text, disabled}) => (
  <View>
    {text ? (
      <View style={{...styles.container}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    ) : (
      <View style={{...styles.container}}>
        {disabled ? LeftArrowGray : LeftArrow}
      </View>
    )}
  </View>
);

export default PreviousButton;

PreviousButton.defaultProps = {
  children: null,
  onPress: () => {},
};

PreviousButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
