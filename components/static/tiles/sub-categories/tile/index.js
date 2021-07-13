import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {APP_DARK_GRAY, APP_GRAY, BLACK, WHITE} from '../../../../../constants';

import styles from './index.styles';

const Tile = ({
  id,
  title = 'Title',
  subtitle = 'Subtitle',
  titleColor = APP_DARK_GRAY,
  subtitleColor = APP_GRAY,
  icon,
  onPress,
  ...props
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
    <View style={styles.content} />
    <View style={styles.texts}>
      <Text style={{...styles.title, color: titleColor}}>{title}</Text>
      <Text style={{...styles.subtitle, color: subtitleColor}}>
        {' '}
        {subtitle}
      </Text>
    </View>
    <View style={styles.iconHolder}>
      <Image source={icon} />
    </View>
  </TouchableOpacity>
);

export default Tile;
