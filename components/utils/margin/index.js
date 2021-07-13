import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './index.styles';
import {getMargin} from './utils';

const Margin = ({
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  children,
}) => {
  const margin = getMargin({
    mt1,
    mt2,
    mt3,
    mt4,
    mt5,
    mb1,
    mb2,
    mb3,
    mb4,
    mb5,
    ml1,
    ml2,
    ml3,
    ml4,
    ml5,
    mr1,
    mr2,
    mr3,
    mr4,
    mr5,
  });

  return <View style={{...margin}}>{children}</View>;
};

export default Margin;

Margin.defaultProps = {
  children: null,
};

Margin.propTypes = {
  children: PropTypes.node,
};
