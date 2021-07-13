import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import Margin from '../../utils/margin';

const InventoryStatus = ({
  titleLeft = 'objets',
  subtitleLeft = 0,
  titleRight = 'Rendu',
  subtitleRight = 0,
}) => (
  <View style={styles.root}>
    <ContentHolder rounded>
      <View style={styles.container}>
        <View style={styles.spacer} />
        <View style={styles.left}>
          <Text style={styles.textRight}>{titleLeft}</Text>
          <View style={styles.textMargin} />
          <Text style={styles.textRight}>{subtitleLeft}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.right}>
          <Text style={styles.textLeft}>{titleRight}</Text>
          <View style={styles.textMargin} />
          <Text style={styles.textLeft}>{subtitleRight}</Text>
        </View>
        <View style={styles.spacer} />
      </View>
    </ContentHolder>
  </View>
);

export default InventoryStatus;

InventoryStatus.defaultProps = {
  children: null,
  onPress: () => {},
};

InventoryStatus.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
