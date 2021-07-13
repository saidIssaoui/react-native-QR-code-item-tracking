import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {APP_GRAY, APP_PURPLE, APP_RED} from '../../../constants';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import Radio from './index';

const RealWorld = () => {
  const [sexe, setSexe] = useState('female');
  const [employment, setEmployment] = useState('female');
  const handleChooseSexe = value => {
    setSexe(value);
  };
  const handleChooseEmployment = value => {
    setEmployment(value);
  };
  return (
    <Center>
      <Text
        style={{
          color: APP_GRAY,
          fontSize: 16,
          alignSelf: 'flex-start',
          marginLeft: 32,
          fontWeight: '700',
        }}>
        Choose your sexe:
      </Text>
      <Margin mb2 />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
        }}>
        <Radio
          color={sexe === 'female' ? APP_RED : APP_GRAY}
          text="Female"
          selected={sexe === 'female'}
          onPress={() => handleChooseSexe('female')}
        />
        <Radio
          color={sexe === 'male' ? APP_RED : APP_GRAY}
          text="Male"
          selected={sexe === 'male'}
          onPress={() => handleChooseSexe('male')}
        />
        <Radio
          color={sexe === 'robot' ? APP_RED : APP_GRAY}
          text="Robot"
          selected={sexe === 'robot'}
          onPress={() => handleChooseSexe('robot')}
        />
      </View>
      <Margin mb4 />
      <Text
        style={{
          color: APP_GRAY,
          fontSize: 16,
          alignSelf: 'flex-start',
          marginLeft: 32,
          fontWeight: '700',
        }}>
        Choose your employment:
      </Text>
      <Margin mb2 />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
        }}>
        <Radio
          color={employment === 'unemployed' ? APP_PURPLE : APP_GRAY}
          text="Unemployed"
          selected={employment === 'unemployed'}
          onPress={() => handleChooseEmployment('unemployed')}
        />
        <Radio
          color={employment === 'employed' ? APP_PURPLE : APP_GRAY}
          text="Employed"
          selected={employment === 'employed'}
          onPress={() => handleChooseEmployment('employed')}
        />
      </View>
    </Center>
  );
};

const handlePress = value => {
  alert(value);
};

storiesOf('Radio', module)
  .add('_real world', () => <RealWorld />)
  .add('normal', () => <Radio />)
  .add('centered', () => (
    <Center>
      <Radio text="Male" onPress={() => handlePress('male')} />
    </Center>
  ))
  .add('selected and disabled', () => (
    <Center>
      <Radio
        text="Female"
        color={APP_RED}
        selected
        disabled
        onPress={() => handlePress('female')}
      />
    </Center>
  ));
