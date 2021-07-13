import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Center from '../../utils/center';
import CameraButton from './index';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Camera Button', module)
  .add('_real world', () => (
    <Center>
      <CameraButton onPress={handlePress} />
    </Center>
  ))
  .add('normal', () => <CameraButton />)
  .add('disabled', () => <CameraButton disabled />)
  .add('with action', () => <CameraButton onPress={handlePress} />);
