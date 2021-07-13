import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {WHITE} from '../constants';
import Navigator from '../navigator';
import Navigatore from '../navigator/index Loggedin';
import SplashScreen from 'react-native-splash-screen';

// import all the components we are going to use
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tutorial from '../screens/tutorial/Tutorial';

const LoginAndtuto = () => {
  useEffect(() => {
    hideNavigationBar();
    checkForFirstTimeLoaded();
    checkForFirstTimeLogged();
    hideScreen();
  }, []);

  const [loading, setLoading] = useState(true);
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);
  const [isFirstTimeLogged, setIsFirstTimeLogged] = useState(false);
  const onDone = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
  };
  const onSkip = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
  };

  const hideScreen = () => {
    SplashScreen.hide();
  };

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem('isFirstTimeOpen');
    if (result === null) setIsFirstTimeLoad(true);
    setLoading(false);
  };
  const checkForFirstTimeLogged = async () => {
    const result = await AsyncStorage.getItem('isNotSignedIn');
    if (result === null) setIsFirstTimeLogged(true);
  };

  return (
    <>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      {isFirstTimeLoad ? (
        <Tutorial onSkip={onSkip} onDone={onDone} />
      ) : isFirstTimeLogged ? (
        <Navigator />
      ) : (
        <Navigatore />
      )}
    </>
  );
};

export default LoginAndtuto;
