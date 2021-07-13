import React from 'react';
import {View, Text, Image} from 'react-native';
import Margin from '../../utils/margin';
import styles from './index.styles';

const IntroItem = ({image, title, text}) => (
  <View style={styles.slide}>
    <View style={styles.top}></View>
    <View style={styles.middle}>
      <Image source={image} style={styles.image} />
      <Margin mb4 />
      <Text style={styles.title}>{title}</Text>
      <Margin mb4 />
      <View style={styles.textHolder}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
    <View style={styles.bottom}></View>
  </View>
);

export default IntroItem;
