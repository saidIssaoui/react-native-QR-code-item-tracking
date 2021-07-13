import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-iconly';
import {WHITE} from '../../../constants';
import styles from './index.styles';

const camera = <Camera set="light" color={WHITE} size={36} />;

const LaunchCamera = ({icon = camera, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>{icon}</View>
  </TouchableOpacity>
);

export default LaunchCamera;
