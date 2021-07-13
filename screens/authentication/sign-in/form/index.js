import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Message, Lock, Show, Danger, Hide} from 'react-native-iconly';
import T from 'react-native-i18n';
import Center from '../../../../components/utils/center';
import Margin from '../../../../components/utils/margin';
import Input from '../../../../components/inputs/text';
import {APP_GRAY, APP_PURPLE, APP_RED, WHITE} from '../../../../constants';
import styles from './index.styles';

const Form = ({
  email,
  password,
  invalidEmail,
  invalidPassword,
  handleEmailChange,
  handlePasswordChange,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const handleAction = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{T.t('sign-in.Email address')}</Text>
        <Margin mb1 />
        <Input
          value={email}
          placeholder="addressemail@mail.com"
          onChangeText={handleEmailChange}
          iconLeft={<Message set="light" color={APP_PURPLE} size={28} />}
          textColor={APP_PURPLE}
          highlighted={invalidEmail}
          borderColor={APP_RED}
        />
      </View>
      <Margin mb1 />
      <View>
        <Text style={styles.title}>{T.t('sign-in.Password')}</Text>
        <Margin mb1 />
        <Input
          value={password}
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
          textColor={invalidPassword ? APP_RED : APP_PURPLE}
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
    </View>
  );
};

export default Form;
