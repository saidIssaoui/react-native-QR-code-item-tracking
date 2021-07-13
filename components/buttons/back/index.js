import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ChevronLeft} from 'react-native-iconly';
import {BLACK} from '../../../constants';

const icon = <ChevronLeft set="light" color={BLACK} size={32} />;

const Back = ({onPress, top = 32, left = 0, position = 'absolute'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        position,
        top: 32,
        left: 9,
      }}>
      {icon}
    </TouchableOpacity>
  );
};

export default Back;
