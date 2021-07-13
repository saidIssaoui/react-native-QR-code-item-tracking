import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './index.styles';

const Kilometers = ({characters = 2}) => {
  let str = '';
  for (let index = 0; index < characters; index++) {
    str = str + 9;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{...styles.input, width: characters * 18}}
        placeholder={str}
        keyboardType="numeric"
        maxLength={characters}
      />
      <View style={styles.line} />
    </View>
  );
};

export default Kilometers;
