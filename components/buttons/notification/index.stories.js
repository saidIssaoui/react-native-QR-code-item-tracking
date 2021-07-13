import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import Notification from './index';

const handlePress = () => {
  alert('Press');
};

storiesOf('Notification bell', module)
  .add('_real world', () => (
    <Center>
      <Notification pending onPress={handlePress} />
    </Center>
  ))
  .add('pending', () => (
    <Center>
      <Notification pending />
    </Center>
  ))
  .add('normal', () => (
    <Center>
      <Notification />
    </Center>
  ))
  .add('with press', () => (
    <Center>
      <Notification pending onPress={handlePress} />
    </Center>
  ));
