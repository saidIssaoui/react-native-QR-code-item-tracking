import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import FlashController from './index';

storiesOf('FlashController', module).add('_real world', () => (
  <Center>
    <FlashController />
  </Center>
));
