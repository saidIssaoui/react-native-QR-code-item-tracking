import React from 'react';
import Active from './active';
import Inactive from './inactive';

const FlashOn = ({active = false, big = false}) => (
  <>{active ? <Active /> : <Inactive big={big} />}</>
);

export default FlashOn;
