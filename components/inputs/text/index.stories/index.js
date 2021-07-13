import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {Home, Search, Document, Send, TimeCircle} from 'react-native-iconly';
import {APP_GRAY, APP_GREEN, APP_RED} from '../../../../constants';
import Center from '../../../utils/center';
import TextInput from '../index';
import InputExample from './index.example';

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Input Text', module)
  .add('_real world', () => <InputExample />)
  .add('normal', () => <TextInput />)
  .add('centered', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput />
      </View>
    </Center>
  ))
  .add('with placeholder', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput placeholder="This is a placeholder" />
      </View>
    </Center>
  ))
  .add('disabled', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput disabled />
      </View>
    </Center>
  ))
  .add('small', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput small />
      </View>
    </Center>
  ))
  .add('search', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput
          small
          iconRight={<Search set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
          onChangeText={() => {}}
        />
      </View>
    </Center>
  ))
  .add('password', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput tall password />
      </View>
    </Center>
  ))
  .add('icon left', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput
          iconLeft={<Document set="light" color={APP_GRAY} size={24} />}
        />
      </View>
    </Center>
  ))
  .add('icon right', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput
          iconRight={<Document set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
        />
      </View>
    </Center>
  ))
  .add('two icons', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput
          password
          iconLeft={<Document set="light" color={APP_GRAY} size={24} />}
          iconRight={<Send set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
        />
      </View>
    </Center>
  ))
  .add('three icons', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput
          iconLeft={<Document set="light" color={APP_GRAY} size={24} />}
          iconSecondary={<TimeCircle set="light" color={APP_GREEN} size={24} />}
          iconRight={<Send set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
        />
      </View>
    </Center>
  ))
  .add('highlighted', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput highlighted borderColor={APP_RED} />
      </View>
    </Center>
  ))
  .add('text color', () => (
    <Center>
      <View style={{width: '80%'}}>
        <TextInput textColor={APP_RED} />
      </View>
    </Center>
  ));
