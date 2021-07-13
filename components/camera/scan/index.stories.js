import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import RealWorld from './index';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Camera Button', module)
  .add('_real world', () => <RealWorld onPress={handlePress} />)
  .add('normal', () => <CameraButton />)
  .add('disabled', () => <CameraButton disabled />)
  .add('with action', () => <CameraButton onPress={handlePress} />);
