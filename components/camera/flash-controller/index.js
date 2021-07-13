import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Home, Scan, User} from 'react-native-iconly';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import {APP_GRAY, APP_PURPLE, BLACK, WHITE} from '../../../constants';
import {ArrowUp, ArrowDown, ArrowRight} from 'react-native-iconly';
import FlashOn from '../../static/icons/flash/on';
import FlashOff from '../../static/icons/flash/off';
import FlashAuto from '../../static/icons/flash/auto';
import Button from './button';

const on = <FlashOn />;
const off = <FlashOff />;
const auto = <FlashAuto />;

const onActive = <FlashOn active />;
const offActive = <FlashOff active />;
const autoActive = <FlashAuto active />;

const FlashController = ({flash, handleChangeFlash}) => (
  <View style={styles.root}>
    <ContentHolder rounded>
      <View style={styles.container}>
        <Button
          icon={flash === 0 ? onActive : on}
          disabled={flash === 0}
          onPress={() => handleChangeFlash(0)}
        />
        <Button
          icon={flash === 1 ? autoActive : auto}
          disabled={flash === 1}
          onPress={() => handleChangeFlash(1)}
        />
        <Button
          icon={flash === 2 ? offActive : off}
          disabled={flash === 2}
          onPress={() => handleChangeFlash(2)}
        />
      </View>
    </ContentHolder>
  </View>
);

export default FlashController;
