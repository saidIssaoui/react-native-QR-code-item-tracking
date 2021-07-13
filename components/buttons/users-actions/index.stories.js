import {storiesOf} from '@storybook/react-native';
import React from 'react';
import UsersActions from './index';

const RealWorld = () => {
  const handleDelete = () => {
    alert('DELETE');
  };
  const handleMove = () => {
    alert('MOVE');
  };
  return <UsersActions onPressLeft={handleDelete} onPressRight={handleMove} />;
};

storiesOf('Users Actions', module).add('_real world', () => <RealWorld />);
