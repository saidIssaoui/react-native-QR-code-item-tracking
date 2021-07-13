import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import Rating from './index';

const handleSetRating = r => {
  if (rating === r) {
    setRating(0);
  } else {
    setRating(r);
  }
};

const RealWorld = () => {
  const [rating, setRating] = useState(3);
  const handleSetRating = r => {
    if (rating === r) {
      setRating(0);
    } else {
      setRating(r);
    }
  };
  return (
    <Center>
      <Rating text="Value" rating={rating} handleSetRating={handleSetRating} />
      <Margin mb2 />
      <Rating
        text="Disabled"
        rating={4}
        handleSetRating={handleSetRating}
        disabled
      />
    </Center>
  );
};

storiesOf('Rating', module)
  .add('_real world', () => <RealWorld />)
  .add('normal', () => (
    <Center>
      <Rating rating={2} disabled />
    </Center>
  ))
  .add('all', () => (
    <Center>
      <Rating text="Value" rating={0} disabled />
      <Margin mb1 />
      <Rating text="Value" rating={1} disabled />
      <Margin mb1 />
      <Rating text="Value" rating={2} disabled />
      <Margin mb1 />
      <Rating text="Value" rating={3} disabled />
      <Margin mb1 />
      <Rating text="Value" rating={4} disabled />
      <Margin mb1 />
      <Rating text="Value" rating={5} disabled />
      <Margin mb1 />
    </Center>
  ));
