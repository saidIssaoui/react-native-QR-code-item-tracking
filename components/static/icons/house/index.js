import React from 'react';
import BareboneHouse from './house';
import HouseCircle from './house-circle';

const House = ({circle = false}) => (
  <>{circle ? <HouseCircle /> : <BareboneHouse />}</>
);

export default House;
