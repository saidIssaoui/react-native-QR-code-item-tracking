import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import MemberProfile from '../../../screens/members/profile';
import MemberSettings from '../../../screens/members/settings';
import MembersScreen from '../../../screens/members';
import MembersListScreen from '../../../screens/members/list';

const MembersStack = createStackNavigator();

export default () => (
  <MembersStack.Navigator
    screenOptions={{
      cardStyle,
      headerShown: false,
    }}>
    <MembersStack.Screen name="Members" component={MembersScreen} />
    <MembersStack.Screen name="Members List" component={MembersListScreen} />
    <MembersStack.Screen name="Member Profile" component={MemberProfile} />
    <MembersStack.Screen name="Member Settings" component={MemberSettings} />
  </MembersStack.Navigator>
);
