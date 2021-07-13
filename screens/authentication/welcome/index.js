import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import Logo from '../../../components/static/logo/logo';
import styles from './index.styles';

const Welcome = ({navigation}) => {
  const handleGoToSignIn = () => {
    navigation.navigate('Sign In');
  };
  const handleGoToSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const handleNotNow = () => {
    alert('Not now');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Logo width={96} height={96} />
        <Text style={styles.title}>{T.t('welcome.title')}</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>{T.t('welcome.description')}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleGoToSignIn}>
          <Text style={styles.buttonText}>{T.t('welcome.sign in')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSimple} onPress={handleNotNow}>
          <Text style={styles.buttonSimpleText}>{T.t('welcome.not now')}</Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={styles.text}>{T.t('welcome.have account')}</Text>
          <TouchableOpacity onPress={handleGoToSignUp}>
            <Text style={styles.link}>{T.t('welcome.sign up')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
