import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {APP_RED} from '../../../constants';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import CustomButton from './index';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Custom Button', module)
  .add('_real world', () => (
    <Center>
      <CustomButton onPress={handlePress} />
      <Margin mt5 />
      <CustomButton disabled />
    </Center>
  ))
  .add('normal', () => <CustomButton text="Custom button" />)
  .add('centered', () => (
    <Center>
      <CustomButton text="Customddd" />
    </Center>
  ))
  .add('colored', () => (
    <Center>
      <CustomButton
        text="Colored"
        color={APP_RED}
        backgroundColor={APP_RED + '33'}
      />
    </Center>
  ))
  .add('disabled', () => (
    <Center>
      <CustomButton text="Custom" disabled />
    </Center>
  ))
  .add('with action', () => (
    <Center>
      <CustomButton text="Click me" onPress={handlePress} />
    </Center>
  ))
  .add('large', () => (
    <Center>
      <CustomButton text="Click me" onPress={handlePress} width={240} />
    </Center>
  ))
  .add('big', () => (
    <Center>
      <CustomButton
        text="Click me"
        onPress={handlePress}
        width={300}
        height={64}
        fontSize={16}
        fontWeight="700"
        borderRadius={16}
      />
    </Center>
  ));
