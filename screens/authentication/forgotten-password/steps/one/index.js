import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import Back from '../../../../../components/buttons/back';
import ValidateButton from '../../../../../components/buttons/validate';
import Logo from '../../../../../components/static/logo/logo';
import Margin from '../../../../../components/utils/margin';
import Form from './form';
import styles from './index.styles';

const StepOne = ({navigation}) => {
  const [email, setEmail] = useState('');
  const handleEmailChange = email => {
    setEmail(email);
  };
  const [invalidEmail, setInvalidEmail] = useState(false);
  const handleSignIn = () => {
    setInvalidEmail(false);
    if (!email.includes('@') || !email.includes('.')) {
      setInvalidEmail(true);
    } else {
      navigation.navigate('Forgotten Password Step Two', {email});
    }
  };
  const handleGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <Back onPress={handleGoBack} />
      <View style={styles.top}>
        <Logo width={96} height={96} />
        <Text style={styles.title}>
          {T.t('forgotten-password.step-one.Forgotten password')}
        </Text>
      </View>
      <View style={styles.descriptionHolder}>
        <Text style={styles.description}>
          {T.t('forgotten-password.step-one.type your')}
          <Text style={styles.strong}>
            {' '}
            {T.t('forgotten-password.step-one.email address')}
          </Text>
          {'\n'}
          {T.t('forgotten-password.step-one.reinitialize')}
        </Text>
      </View>
      <View style={styles.middle}>
        <Form
          email={email}
          invalidEmail={invalidEmail}
          handleEmailChange={handleEmailChange}
        />
        <Margin mb1 />
      </View>
      <View style={styles.bottom}>
        {email ? <ValidateButton onPress={handleSignIn} /> : null}
      </View>
    </View>
  );
};

export default StepOne;
