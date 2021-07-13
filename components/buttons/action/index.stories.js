import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import ActionButton from './index';
import {Document, Plus, Show, Edit, Delete, User} from 'react-native-iconly';
import {
  BLACK,
  APP_PURPLE,
  APP_RED,
  APP_GREEN,
  APP_ORANGE,
} from '../../../constants';
import {View, Text} from 'react-native';

const icon = <Document set="light" color={BLACK} size={48} />;
const account = <User set="light" color={APP_PURPLE} size={48} />;
const create = <Plus set="light" color={APP_GREEN} size={48} />;
const view = <Show set="light" color={APP_PURPLE} size={48} />;
const update = <Edit set="light" color={APP_ORANGE} size={48} />;
const remove = <Delete set="light" color={APP_RED} size={48} />;

const handlePress = action => {
  alert('Pressed ' + action);
};

const ActionSelector = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = action => {
    setSelected(action);
  };

  return (
    <Center>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: APP_PURPLE}}>
          Select action
        </Text>
        <Margin mt3 />
        <View style={{flexDirection: 'row'}}>
          <ActionButton
            icon={create}
            text="Create object"
            textColor={APP_GREEN}
            onPress={() => handleSelect('CREATE')}
            selected={selected === 'CREATE'}
            disabled={selected === 'CREATE'}
            borderColor={APP_GREEN}
          />
          <Margin mr1 />
          <ActionButton
            icon={view}
            text="View objects"
            textColor={APP_PURPLE}
            onPress={() => handleSelect('VIEW')}
            selected={selected === 'VIEW'}
            disabled={selected === 'VIEW'}
            borderColor={APP_PURPLE}
          />
        </View>
        <Margin mt2 />
        <View style={{flexDirection: 'row'}}>
          <ActionButton
            icon={update}
            text="Update objects"
            textColor={APP_ORANGE}
            onPress={() => handleSelect('UPDATE')}
            selected={selected === 'UPDATE'}
            disabled={selected === 'UPDATE'}
            borderColor={APP_ORANGE}
          />
          <Margin mr1 />
          <ActionButton
            icon={remove}
            text="Delete objects"
            textColor={APP_RED}
            onPress={() => handleSelect('DELETE')}
            selected={selected === 'DELETE'}
            disabled={selected === 'DELETE'}
            borderColor={APP_RED}
          />
        </View>
      </View>
    </Center>
  );
};

storiesOf('Action Button', module)
  .add('_real world navigator', () => (
    <Center>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: APP_PURPLE}}>
          Choose action
        </Text>
        <Margin mt3 />
        <View style={{flexDirection: 'row'}}>
          <ActionButton
            icon={create}
            text="Create object"
            textColor={APP_GREEN}
            onPress={() => handlePress('CREATE')}
          />
          <Margin mr1 />
          <ActionButton
            icon={view}
            text="View objects"
            textColor={APP_PURPLE}
            onPress={() => handlePress('VIEW')}
          />
        </View>
        <Margin mt2 />
        <View style={{flexDirection: 'row'}}>
          <ActionButton
            icon={update}
            text="Update objects"
            textColor={APP_ORANGE}
            onPress={() => handlePress('UPDATE')}
          />
          <Margin mr1 />
          <ActionButton
            icon={remove}
            text="Delete objects"
            textColor={APP_RED}
            onPress={() => handlePress('DELETE')}
          />
        </View>
      </View>
    </Center>
  ))
  .add('_real world selector', () => <ActionSelector />)
  .add('text only', () => <ActionButton text="Text only" />)
  .add('text only centered', () => (
    <Center>
      <ActionButton text="Text only" />
    </Center>
  ))
  .add('disabled', () => (
    <Center>
      <ActionButton text="Text only" />
    </Center>
  ))
  .add('icon', () => (
    <Center>
      <ActionButton icon={icon} />
    </Center>
  ))
  .add('colored icon', () => (
    <Center>
      <ActionButton icon={account} />
    </Center>
  ))
  .add('colored icon with text', () => (
    <Center>
      <ActionButton icon={account} text="My profile" textColor={APP_PURPLE} />
    </Center>
  ))
  .add('colored icon with text selected', () => (
    <Center>
      <ActionButton
        icon={account}
        text="My profile"
        textColor={APP_PURPLE}
        selected
        borderColor={APP_PURPLE}
      />
    </Center>
  ))
  .add('colored icon with text with action', () => (
    <Center>
      <ActionButton
        icon={account}
        text="My profile"
        textColor={APP_PURPLE}
        onPress={() => handlePress('PROFILE')}
      />
    </Center>
  ));
