import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import InventoryStatus from './index';

const RealWorld = () => (
  <Center>
    <InventoryStatus
      titleLeft="Objects"
      subtitleLeft={440}
      subtitleRight={20}
    />
  </Center>
);

storiesOf('Inventory Status', module).add('_real world', () => <RealWorld />);
