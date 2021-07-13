import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Notification as Bell} from 'react-native-iconly';
import {APP_DARK_GRAY} from '../../../constants';
import styles from './index.styles';

const icon = <Bell set="light" color={APP_DARK_GRAY} size={28} />;

const Notification = ({pending = false, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text>{icon}</Text>
      {pending && <View style={styles.dot} />}
    </View>
  </TouchableOpacity>
);

export default Notification;
