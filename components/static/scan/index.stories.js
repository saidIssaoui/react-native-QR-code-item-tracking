import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import StaticScan from './index';

storiesOf('StaticScan', module)
  .add('_real world', () => (
    <Center>
      <StaticScan />
    </Center>
  ))
  .add('normal', () => <StaticScan />);
