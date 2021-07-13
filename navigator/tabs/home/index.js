import * as React from 'react';
import HomeScreen from '../../../screens/home';
import DetailsScreen from '../../../screens/details';
import MembersScreen from '../../../screens/members';
import TabBar from '../../../components/navigator/tab-bar';
import {cardStyle} from './index.styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScanScreen from '../../../screens/scan';
import ProfileStack from '../../stacks/profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle,
    }}
    tabBar={props => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Scan" component={ScanScreen} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);
