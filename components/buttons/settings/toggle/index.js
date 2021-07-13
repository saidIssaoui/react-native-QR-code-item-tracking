import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Margin from '../../../utils/margin';
import ToggleButton from './buttons';
import styles from './index.styles';

const SettingsLink = ({active = true, iconLeft, text, onPress}) => (
  <TouchableOpacity style={styles.action} onPress={onPress}>
    <View style={styles.left}>{iconLeft}</View>
    <Margin ml1 />
    <View style={styles.middle}>
      <Text style={styles.actionLabel}>{text}</Text>
    </View>
    <View style={styles.right}>
      <ToggleButton active={active} />
    </View>
  </TouchableOpacity>
);

export default SettingsLink;
