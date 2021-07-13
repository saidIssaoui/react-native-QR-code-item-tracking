import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import Margin from '../../utils/margin';
import styles from './index.styles';
import {WHITE} from '../../../constants';

const ActionButton = ({
  disabled,
  icon,
  text,
  textColor,
  selected,
  borderColor,
  backgroundColor,
  textStyles = {},
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.container, borderWidth: selected ? 2 : 0, borderColor}}
    disabled={disabled}>
    <ContentHolder rounded backgroundColor={backgroundColor || WHITE}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          {icon && icon}
          {icon && text && <Margin mt1 />}
          {text && (
            <Text style={{...styles.text, color: textColor}}>{text}</Text>
          )}
        </View>
      </View>
    </ContentHolder>
  </TouchableOpacity>
);

export default ActionButton;

ActionButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ActionButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
