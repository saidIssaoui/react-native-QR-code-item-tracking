import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './index.styles';

const Capture = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress} />
);

export default Capture;
