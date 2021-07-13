import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import Welcome from '../../../screens/authentication/welcome';
import SignIn from '../../../screens/authentication/sign-in';
import SignUp from '../../../screens/authentication/sign-up';
import ForgottenPasswordStack from './forgotten-password';

const AuthenticationStack = createStackNavigator();

export default () => (
  <AuthenticationStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle,
    }}>
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Sign In" component={SignIn} />
    <AuthenticationStack.Screen name="Sign Up" component={SignUp} />
    <AuthenticationStack.Screen
      name="Forgotten Password"
      component={ForgottenPasswordStack}
    />
  </AuthenticationStack.Navigator>
);
