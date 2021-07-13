import React from 'react';
import {View} from 'react-native';
import Check from './check';
import styles from './index.styles';
import {APP_PURPLE} from '../../../../constants';

const Checkbox = ({selected = false, color = APP_PURPLE}) => {
  return (
    <View style={{...styles.container, borderColor: color}}>
      {selected && <Check color={color} />}
    </View>
  );
};

export default Checkbox;
