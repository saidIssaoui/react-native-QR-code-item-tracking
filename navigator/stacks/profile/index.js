import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import ProfileScreen from '../../../screens/profile';
import PersonalInformation from '../../../screens/profile/personal-information';
import EstablishmentInformation from '../../../screens/profile/establishment-information';
import SettingsAndNotificationsScreen from '../../../screens/profile/settings-and-notifications';

const ProfileStack = createStackNavigator();

export default () => (
  <ProfileStack.Navigator
    screenOptions={{
      cardStyle,
      headerShown: false,
    }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen
      name="Personal Information"
      component={PersonalInformation}
    />
    <ProfileStack.Screen
      name="Establishment Information"
      component={EstablishmentInformation}
    />
    <ProfileStack.Screen
      name="Settings And Notifications"
      component={SettingsAndNotificationsScreen}
    />
  </ProfileStack.Navigator>
);
