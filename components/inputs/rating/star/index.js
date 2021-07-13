import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Star} from 'react-native-iconly';
import {AMBER} from '../../../../constants';

const deselectedStar = <Star set="light" color={AMBER} size={24} />;
const selectedStar = <Star set="bold" color={AMBER} size={24} />;

const RatingElement = ({selected = false, disabled = false, onPress}) => (
  <TouchableOpacity
    style={{paddingHorizontal: 2}}
    disabled={disabled}
    onPress={onPress}>
    {selected ? selectedStar : deselectedStar}
  </TouchableOpacity>
);

export default RatingElement;
