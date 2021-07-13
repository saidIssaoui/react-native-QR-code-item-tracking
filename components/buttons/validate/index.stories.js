import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import ValidateButton from './index';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Validate Button', module)
  .add('_real world', () => (
    <Center>
      <ValidateButton onPress={handlePress} />
      <Margin mt5 />
      <ValidateButton disabled />
    </Center>
  ))
  .add('normal', () => <ValidateButton />)
  .add('disabled', () => <ValidateButton disabled />)
  .add('with action', () => <ValidateButton onPress={handlePress} />);
