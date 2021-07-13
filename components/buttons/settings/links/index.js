import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Margin from '../../../utils/margin';
import styles from './index.styles';

const SettingsToggle = ({iconLeft, text, iconRight, onPress}) => (
  <TouchableOpacity style={styles.action} onPress={onPress}>
    <View style={styles.left}>{iconLeft}</View>
    <Margin ml1 />
    <View style={styles.middle}>
      <Text style={styles.actionLabel}>{text}</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.actionLabel}>{iconRight}</Text>
    </View>
  </TouchableOpacity>
);

export default SettingsToggle;
