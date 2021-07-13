import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import Back from '../../../../../components/buttons/back';
import ValidateButton from '../../../../../components/buttons/validate';
import VerificationCode from './verification-code';
import Logo from '../../../../../components/static/logo/logo';
import Margin from '../../../../../components/utils/margin';
import styles from './index.styles';
import CountDown from './count-down';

const StepThree = ({route: {params: {email = ''} = {}}, navigation}) => {
  const [code, setCode] = useState(code);
  const handleCompleteCode = c => {
    setCode(c);
  };
  const handleUpdatePassword = () => {
    navigation.navigate('Home');
  };
  const handleResend = () => {
    alert('Resend');
  };
  const handleCompleteCountDown = () => {
    // alert('Completed countdown')
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
          {T.t('forgotten-password.step-three.Enter code')}
        </Text>
      </View>
      <View style={styles.descriptionHolder}>
        <Text style={styles.description}>
          {T.t('forgotten-password.step-three.Check email')}
        </Text>
        <Text style={styles.strong}>{email}</Text>
      </View>
      <View style={styles.middle}>
        <VerificationCode handleCompleteCode={handleCompleteCode} />
        <Margin mb1 />
      </View>
      <View style={styles.bottom}>
        <ValidateButton
          onPress={handleUpdatePassword}
          disabled={code ? false : true}
        />
        <Margin mb3 />
        <View style={styles.resend}>
          <Text style={styles.description}>
            {T.t('forgotten-password.step-three.Did not receive')}
          </Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendButton}>
              {T.t('forgotten-password.step-three.Resend')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.timer}>
            (<CountDown onComplete={handleCompleteCountDown} />)
          </Text>
        </View>
        <Margin mb3 />
      </View>
    </View>
  );
};

export default StepThree;
