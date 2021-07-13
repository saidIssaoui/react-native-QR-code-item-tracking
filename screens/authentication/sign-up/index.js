import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './index.styles';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Sign Up</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
    </View>
  );
};

export default SignUp;
