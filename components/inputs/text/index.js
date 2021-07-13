import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import Margin from '../../utils/margin';
import styles from './index.styles';

const Input = ({
  placeholder,
  value = '',
  textAlign = 'auto',
  small,
  iconLeft,
  iconRight,
  iconSecondary,
  disabled,
  password,
  textColor,
  highlighted,
  borderColor,
  action,
  keyboardType = 'default',
  onPress,
  onChangeText,
}) => (
  <View
    onPress={onPress}
    style={{
      ...styles.container,
      borderWidth: highlighted ? 2 : 0,
      borderRadius: highlighted ? 12 : 0,
      borderColor,
    }}
    disabled={disabled}>
    <ContentHolder rounded>
      <View style={{...styles.outer, height: small ? 40 : 60}}>
        <View style={styles.inner}>
          {iconLeft && <View style={styles.left}>{iconLeft}</View>}
          <View style={styles.middle}>
            <TextInput
              style={{...styles.input, color: textColor, textAlign}}
              editable={!disabled}
              secureTextEntry={password}
              onChangeText={text => onChangeText(text)}
              placeholder={placeholder}
              value={value}
              keyboardType={keyboardType}
            />
          </View>
          {iconSecondary && (
            <View style={styles.secondary}>{iconSecondary}</View>
          )}
          {iconRight && (
            <>
              {action ? (
                <TouchableOpacity onPress={action} style={styles.right}>
                  {iconRight}
                </TouchableOpacity>
              ) : (
                <View style={styles.right}>{iconRight}</View>
              )}
            </>
          )}
        </View>
      </View>
    </ContentHolder>
  </View>
);

export default Input;

Input.defaultProps = {
  children: null,
  onPress: () => {},
};

Input.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
