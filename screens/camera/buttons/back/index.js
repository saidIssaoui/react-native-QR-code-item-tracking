import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './index.styles';
import {CloseSquare} from 'react-native-iconly';
import {WHITE} from '../../../../constants';

const icon = <CloseSquare set="light" color={WHITE} size={48} />;

const Back = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text>{icon}</Text>
  </TouchableOpacity>
);

export default Back;
