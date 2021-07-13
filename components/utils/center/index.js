import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './index.styles';

const Center = ({children}) => <View style={styles.container}>{children}</View>;

export default Center;

Center.defaultProps = {
  children: null,
};

Center.propTypes = {
  children: PropTypes.node,
};
