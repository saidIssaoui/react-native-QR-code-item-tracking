import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {Delete, Swap} from 'react-native-iconly';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import {APP_GRAY} from '../../../constants';
import Margin from '../../utils/margin';

const remove = <Delete set="light" color={APP_GRAY} size={24} />;
const swap = <Swap set="light" color={APP_GRAY} size={24} />;

const UsersActions = ({
  textLeft = 'Delete',
  textRight = 'Move',
  iconLeft = remove,
  iconRight = swap,
  disabled,
  onPressLeft,
  onPressRight,
}) => (
  <View style={styles.root}>
    <ContentHolder rounded>
      <View style={styles.container}>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.left} onPress={onPressLeft}>
          {iconLeft}
          <Margin mb1 />
          <Text style={styles.text}>{textLeft}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.right} onPress={onPressRight}>
          {iconRight}
          <Margin mb1 />
          <Text style={styles.text}>{textRight}</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>
    </ContentHolder>
  </View>
);

export default UsersActions;

UsersActions.defaultProps = {
  children: null,
  onPress: () => {},
};

UsersActions.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
