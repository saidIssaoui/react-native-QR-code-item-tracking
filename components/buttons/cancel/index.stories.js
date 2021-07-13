import {storiesOf} from '@storybook/react-native';
import React from 'react';
import T from 'react-native-i18n';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import CancelButton from './index';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Cancel Button', module)
  .add('_real world', () => (
    <Center>
      <CancelButton onPress={handlePress} />
      <Margin mt3 />
      <CancelButton disabled />
      <Margin mt3 />
      <CancelButton text={T.t('cancel')} onPress={handlePress} />
      <Margin mt3 />
      <CancelButton text={T.t('cancel')} disabled />
    </Center>
  ))
  .add('normal', () => <CancelButton />)
  .add('disabled', () => <CancelButton disabled />)
  .add('with action', () => <CancelButton onPress={handlePress} />)
  .add('with text', () => <CancelButton text="Cancel" onPress={handlePress} />)
  .add('disabled with text', () => <CancelButton text="Cancel" disabled />);
