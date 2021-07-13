import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BLACK, WHITE} from '../../../../../constants';
import styles from './index.styles';

const withContent =
  WrappedComponent =>
  ({
    id,
    title = 'Title',
    subtitle = 'Subtitle',
    titleColor = BLACK,
    subtitleColor = WHITE,
    onPress,
    ...props
  }) =>
    (
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <WrappedComponent {...props} />
        <View style={styles.content}>
          <View style={styles.texts}>
            <Text style={{...styles.title, color: titleColor}}>{title}</Text>
            <Text style={{...styles.subtitle, color: subtitleColor}}>
              {' '}
              {subtitle}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

export default withContent;
