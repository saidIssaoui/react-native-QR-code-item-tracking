import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScanStack from './stacks/scan';
import ProfileStack from './stacks/profile';
import CatalogueStack from './stacks/catalogue';
import AuthenticationStack from './stacks/authentication';
import CameraScreen from '../screens/camera';
import {cardStyle} from './index.styles';
import {HomeTabs} from './tabs';
import CreateItem from './stacks/create-item';
import MembersStack from './stacks/members';
import NotificationsScreen from '../screens/notifications';
import ItemDetails from '../screens/item-Detail';
import AccessCamera from '../screens/cameraAccess';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle,
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Authentication" component={AuthenticationStack} />

      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Create Item" component={CreateItem} />
      <Stack.Screen name="Scan" component={ScanStack} />
      <Stack.Screen name="Catalogue" component={CatalogueStack} />
      <Stack.Screen name="Members" component={MembersStack} />
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Item Details" component={ItemDetails} />
      <Stack.Screen name="Camera Access" component={AccessCamera} />
    </Stack.Navigator>
  </NavigationContainer>
);
