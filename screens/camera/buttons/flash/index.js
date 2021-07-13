import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './index.styles';
import {ArrowUp, ArrowDown, ArrowRight} from 'react-native-iconly';
import {WHITE, BLACK} from '../../../../constants';
import FlashOn from '../../../../components/static/icons/flash/on';
import FlashOff from '../../../../components/static/icons/flash/off';
import FlashAuto from '../../../../components/static/icons/flash/auto';

const on = <FlashOn big />;
const off = <FlashOff big />;
const auto = <FlashAuto big />;

const Flash = ({flash, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {flash === 0 && <Text>{on}</Text>}
    {flash === 1 && <Text>{auto}</Text>}
    {flash === 2 && <Text>{off}</Text>}
  </TouchableOpacity>
);

export default Flash;
