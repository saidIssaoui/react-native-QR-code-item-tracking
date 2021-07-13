import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {WHITE} from '../../../constants';
import styles from './index.styles';

const Pending = () => (
  <View style={styles.container}>
    <ActivityIndicator size={48} color="#888" />
  </View>
);

export default Pending;
