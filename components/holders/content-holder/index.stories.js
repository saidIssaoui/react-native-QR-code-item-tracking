import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {User} from 'react-native-iconly';
import {Text, TouchableOpacity, View} from 'react-native';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import ContentHolder from './index';
import {APP_PURPLE} from '../../../constants';

const icon = <User set="light" color={APP_PURPLE} size={36} />;

const handlePress = () => {
  alert('Pressed');
};

storiesOf('Content Holder', module)
  .add('_real world', () => (
    <Center>
      <TouchableOpacity onPress={handlePress}>
        <ContentHolder rounded>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 200,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
                width: 200,
              }}>
              {icon}
              <Margin mt1 />
              <Text>Alice Alyne</Text>
            </View>
          </View>
        </ContentHolder>
      </TouchableOpacity>
    </Center>
  ))
  .add('rounded square', () => (
    <Center>
      <ContentHolder rounded>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100,
          }}>
          <Text>Square</Text>
        </View>
      </ContentHolder>
    </Center>
  ))
  .add('fix it', () => (
    <Center>
      <ContentHolder>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100,
          }}>
          <Text>fix it</Text>
        </View>
      </ContentHolder>
    </Center>
  ));
