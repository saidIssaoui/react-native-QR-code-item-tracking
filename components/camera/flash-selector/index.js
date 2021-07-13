import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Scan} from 'react-native-iconly';
import {APP_PURPLE, BLACK, WHITE} from '../../../constants';
import styles from './index.styles';

const icon = <Scan set="light" color={WHITE} size={36} />;

const FlashSelector = ({flash, handleChangeFlash}) => (
  <View style={styles.container}>
    <Text>Flash: </Text>
    <TouchableOpacity
      disabled={flash === 0}
      onPress={() => handleChangeFlash(0)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: flash === 0 ? APP_PURPLE : null,
        }}>
        <Text style={{color: flash === 0 ? WHITE : APP_PURPLE}}>Auto</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      disabled={flash === 1}
      onPress={() => handleChangeFlash(1)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: flash === 1 ? APP_PURPLE : null,
        }}>
        <Text style={{color: flash === 1 ? WHITE : APP_PURPLE}}>On</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      disabled={flash === 2}
      onPress={() => handleChangeFlash(2)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: flash === 2 ? APP_PURPLE : null,
        }}>
        <Text style={{color: flash === 2 ? WHITE : APP_PURPLE}}>Off</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default FlashSelector;
