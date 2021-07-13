import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import Back from '../../../../../components/buttons/back';
import ValidateButton from '../../../../../components/buttons/validate';
import Logo from '../../../../../components/static/logo/logo';
import Margin from '../../../../../components/utils/margin';
import Form from './form';
import styles from './index.styles';

const StepTwo = ({route: {params: {email = ''} = {}}, navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const handleNewPasswordChange = password => {
    setNewPassword(password);
  };
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = password => {
    setConfirmPassword(password);
  };
  const [invalidNewPassword, setInvalidNewPassword] = useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const handleSignIn = () => {
    setInvalidConfirmPassword(false);
    setInvalidNewPassword(false);
    if (newPassword.length < 6) {
      setInvalidNewPassword(true);
    } else if (confirmPassword.length < 6) {
      setInvalidConfirmPassword(true);
    } else if (newPassword !== confirmPassword) {
      alert('Password mismatch');
    } else {
      alert(newPassword + '\n' + confirmPassword);
      navigation.navigate('Forgotten Password Step Three', {email});
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
          {T.t('forgotten-password.step-two.Type new password')}
        </Text>
      </View>
      <View style={styles.middle}>
        <Form
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          invalidNewPassword={invalidNewPassword}
          invalidConfirmPassword={invalidConfirmPassword}
          handleNewPasswordChange={handleNewPasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
        />
        <Margin mb1 />
      </View>
      <View style={styles.bottom}>
        <ValidateButton onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default StepTwo;
