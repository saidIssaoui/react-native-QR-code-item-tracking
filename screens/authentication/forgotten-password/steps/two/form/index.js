import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Message, Lock, Show, Danger, Hide} from 'react-native-iconly';
import T from 'react-native-i18n';
import Input from '../../../../../../components/inputs/text';
import {
  APP_GRAY,
  APP_PURPLE,
  APP_RED,
  WHITE,
} from '../../../../../../constants';
import styles from './index.styles';
import Margin from '../../../../../../components/utils/margin';

const Form = ({
  newPassword,
  confirmPassword,
  invalidNewPassword,
  invalidConfirmPassword,
  handleNewPasswordChange,
  handleConfirmPasswordChange,
}) => {
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const handleHideNewPassword = () => {
    setHideNewPassword(!hideNewPassword);
  };
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const handleHideConfirmPassword = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {T.t('forgotten-password.step-two.New password')}
        </Text>
        <Margin mb1 />
        <Input
          value={newPassword}
          iconLeft={<Lock set="light" color={APP_PURPLE} size={28} />}
          iconRight={
            hideNewPassword ? (
              <Hide set="light" color={APP_PURPLE} size={28} />
            ) : (
              <Show set="light" color={APP_PURPLE} size={28} />
            )
          }
          password={hideNewPassword}
          action={handleHideNewPassword}
          textColor={invalidNewPassword ? APP_RED : APP_PURPLE}
          onChangeText={handleNewPasswordChange}
          highlighted={invalidNewPassword}
          borderColor={APP_RED}
          iconSecondary={
            invalidNewPassword ? (
              <Danger set="light" color={APP_RED} size={28} />
            ) : null
          }
        />
      </View>
      <Margin mb1 />
      <View>
        <Text style={styles.title}>
          {T.t('forgotten-password.step-two.Confirm password')}
        </Text>
        <Margin mb1 />
        <Input
          value={confirmPassword}
          iconLeft={<Lock set="light" color={APP_PURPLE} size={28} />}
          iconRight={
            hideConfirmPassword ? (
              <Hide set="light" color={APP_PURPLE} size={28} />
            ) : (
              <Show set="light" color={APP_PURPLE} size={28} />
            )
          }
          password={hideConfirmPassword}
          action={handleHideConfirmPassword}
          textColor={invalidConfirmPassword ? APP_RED : APP_PURPLE}
          onChangeText={handleConfirmPasswordChange}
          highlighted={invalidConfirmPassword}
          borderColor={APP_RED}
          iconSecondary={
            invalidConfirmPassword ? (
              <Danger set="light" color={APP_RED} size={28} />
            ) : null
          }
        />
      </View>
    </View>
  );
};

export default Form;
