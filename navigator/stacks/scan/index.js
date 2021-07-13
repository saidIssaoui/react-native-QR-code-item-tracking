import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScanScreen from '../../../screens/scan';
import CameraScreen from '../../../screens/camera';
import DetailsScreen from '../../../screens/details';

import {cardStyle} from './index.styles';
const ScanStack = createStackNavigator();

export default () => (
  <ScanStack.Navigator
    screenOptions={{
      cardStyle,
      headerShown: false,
    }}>
    <ScanStack.Screen name="Scan" component={ScanScreen} />
    <ScanStack.Screen name="Camera" component={CameraScreen} />
    <ScanStack.Screen name="Details" component={DetailsScreen} />
  </ScanStack.Navigator>
);
