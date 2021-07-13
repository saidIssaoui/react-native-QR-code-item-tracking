import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Scan} from 'react-native-iconly';
import {WHITE} from '../../../constants';
import styles from './index.styles';

const icon = <Scan set="light" color={WHITE} size={36} />;

const ScanQRCode = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>{icon}</View>
  </TouchableOpacity>
);

export default ScanQRCode;
