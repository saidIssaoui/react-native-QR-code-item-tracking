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

const Form = ({email, invalidEmail, handleEmailChange}) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>
        {T.t('forgotten-password.step-one.Email address')}
      </Text>
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
  </View>
);

export default Form;
