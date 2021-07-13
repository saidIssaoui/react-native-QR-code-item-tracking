import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import CatalogueScreen from '../../../screens/catalogue';

const ScanStack = createStackNavigator();

export default () => (
  <ScanStack.Navigator
    screenOptions={{
      cardStyle,
      headerShown: false,
    }}>
    <ScanStack.Screen name="Catalogue" component={CatalogueScreen} />
  </ScanStack.Navigator>
);
