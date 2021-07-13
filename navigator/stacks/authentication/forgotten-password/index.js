import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import {
  StepOne,
  StepThree,
  StepTwo,
} from '../../../../screens/authentication/forgotten-password';

const ForgottenPasswordStack = createStackNavigator();

export default () => (
  <ForgottenPasswordStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle,
    }}>
    <ForgottenPasswordStack.Screen
      name="Forgotten Password Step One"
      component={StepOne}
    />
    <ForgottenPasswordStack.Screen
      name="Forgotten Password Step Two"
      component={StepTwo}
    />
    <ForgottenPasswordStack.Screen
      name="Forgotten Password Step Three"
      component={StepThree}
    />
  </ForgottenPasswordStack.Navigator>
);
