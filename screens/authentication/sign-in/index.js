import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import ValidateButton from '../../../components/buttons/validate';
import Logo from '../../../components/static/logo/logo';
import Margin from '../../../components/utils/margin';
import Form from './form';
import styles from './index.styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const handleGoToForgottonPassword = () => {
    navigation.navigate('Forgotten Password');
  };
  const handleGoToSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const [email, setEmail] = useState('');
  const handleEmailChange = email => {
    setEmail(email);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = password => {
    setPassword(password);
  };
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const handleSignIn = () => {
    setInvalidEmail(false);
    setInvalidPassword(false);
    if (!email.includes('@') || !email.includes('.')) {
      setInvalidEmail(true);
    } else if (password.length < 6) {
      setInvalidPassword(true);
    } else {
      postLogin();
    }
  };
  const userObject = {
    email: email,
    password: password,
  };
  const postLogin = () => {
    axios
      .post('http://192.168.1.14:9000/api/utilisateur/auth', userObject)
      .then(function (response) {
        // handle success
        var info = response.data;

        var nom = response.data.nom;
        var prenom = response.data.prenom;
        var id = response.data._id;
        AsyncStorage.setItem('isNotSignedIn', 'yes').then(() =>
          AsyncStorage.getItem('isNotSignedIn').then(result =>
            console.log(result),
          ),
        );
        AsyncStorage.setItem('isName', nom).then(() =>
          AsyncStorage.getItem('isName').then(result => console.log(result)),
        );
        AsyncStorage.setItem('isSurname', prenom).then(() =>
          AsyncStorage.getItem('isSurname').then(result => console.log(result)),
        );
        AsyncStorage.setItem('isId', id).then(() =>
          AsyncStorage.getItem('isId').then(result => console.log(result)),
        );
        navigation.navigate('Home', {screen: 'Home', params: {data: info}});
      })
      .catch(function (error) {
        // handle error
        alert("il n'y a pas un utilisateur avec ses identifiant");
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Logo width={96} height={96} />
        <Text style={styles.title}>{T.t('sign-in.Sign in')}</Text>
      </View>
      <View style={styles.middle}>
        <Form
          email={email}
          password={password}
          invalidEmail={invalidEmail}
          invalidPassword={invalidPassword}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
        <Margin mb1 />
      </View>
      <View style={{width: '80%'}}>
        <TouchableOpacity onPress={handleGoToForgottonPassword}>
          <Text style={styles.forgottenPassword}>
            {T.t('sign-in.Forgotten password?')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <ValidateButton onPress={handleSignIn} />
        <Margin mb3 />
        <View style={styles.signUp}>
          <Text style={styles.text}>{T.t('sign-in.Or')}</Text>
          <TouchableOpacity onPress={handleGoToSignUp}>
            <Text style={styles.link}>{T.t('sign-in.Sign up')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
