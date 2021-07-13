import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Message, Lock, Show, Danger, Hide} from 'react-native-iconly';
import Input from '..';
import {APP_GRAY, APP_PURPLE, APP_RED, WHITE} from '../../../../constants';
import Center from '../../../utils/center';
import Margin from '../../../utils/margin';
const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  title: {
    color: APP_GRAY,
    fontWeight: '700',
  },
  textError: {color: APP_RED},
  button: {
    height: 60,
    width: '100%',
    backgroundColor: APP_PURPLE,
    borderRadius: 12,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: WHITE,
  },
});

const InputExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const handleEmailChange = email => {
    setEmail(email);
  };
  const handlePasswordChange = password => {
    setPassword(password);
  };
  const handleAction = () => {
    setHidePassword(!hidePassword);
  };
  const handleSignIn = () => {
    setInvalidEmail(false);
    setInvalidPassword(false);

    if (!email.includes('@') || !email.includes('.')) {
      setInvalidEmail(true);
    } else if (password.length < 6) {
      setInvalidPassword(true);
    } else {
      alert(email + '\n' + password);
    }
  };
  return (
    <Center>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Email Address</Text>
          <Margin mb1 />
          <Input
            onChangeText={handleEmailChange}
            iconLeft={<Message set="light" color={APP_PURPLE} size={28} />}
            textColor={APP_PURPLE}
            highlighted={invalidEmail}
            borderColor={APP_RED}
          />
        </View>
        {invalidEmail && (
          <View>
            <Margin mt1 />
            <Text style={styles.textError}>Invalid email</Text>
          </View>
        )}
        <Margin mb1 />
        <View>
          <Text style={styles.title}>Password</Text>
          <Margin mb1 />
          <Input
            iconLeft={<Lock set="light" color={APP_PURPLE} size={28} />}
            iconRight={
              hidePassword ? (
                <Hide set="light" color={APP_PURPLE} size={28} />
              ) : (
                <Show set="light" color={APP_PURPLE} size={28} />
              )
            }
            password={hidePassword}
            action={handleAction}
            textColor={APP_PURPLE}
            onChangeText={handlePasswordChange}
            highlighted={invalidPassword}
            borderColor={APP_RED}
            iconSecondary={
              invalidPassword ? (
                <Danger set="light" color={APP_RED} size={28} />
              ) : null
            }
          />
        </View>
        {invalidPassword && (
          <View>
            <Margin mt1 />
            <Text style={styles.textError}>Invalid password</Text>
          </View>
        )}
        <Margin mb3 />
        <TouchableOpacity onPress={handleSignIn}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  );
};

export default InputExample;
