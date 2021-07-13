import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './index.styles';
import Hud from './hud';
import PendingView from './pending';

const CameraScreen = ({
  navigation,
  route: {
    params: {flash = 0, scan = false, handlePictureURI = () => {}} = {},
  } = {},
}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setHidden(true);
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      StatusBar.setHidden(false);
    });
    return unsubscribe;
  }, [navigation]);
  const handleTakePicture = async camera => {
    const options = {quality: 1, base64: true};
    const data = await camera.takePictureAsync(options);
    handlePictureURI(data.uri);
  };
  const handleCancel = () => {
    navigation.pop();
  };
  const handleQRCodeRead = ({data}) => {
    navigation.navigate('Details', {data});
  };
  const [flashState, setFlashState] = useState(flash);
  const flashes = [
    RNCamera.Constants.FlashMode.on,
    RNCamera.Constants.FlashMode.auto,
    RNCamera.Constants.FlashMode.off,
    RNCamera.Constants.FlashMode.torch,
  ];
  const [flashMode, setFlashMode] = useState(flashes[flashState]);
  const handleChangeFlash = () => {
    if (flashState === 0) {
      setFlashState(1);
      setFlashMode(flashes[1]);
    } else if (flashState === 1) {
      setFlashState(2);
      setFlashMode(flashes[2]);
    } else if (flashState === 2) {
      setFlashState(0);
      setFlashMode(flashes[0]);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={flashMode}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onBarCodeRead={response => handleQRCodeRead(response)}
        barCodeTypes={scan ? [RNCamera.Constants.BarCodeType.qr] : []}>
        {({
          camera,
          status,
          // recordAudioPermissionStatus
        }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <Hud
              camera={camera}
              handleTakePicture={handleTakePicture}
              handleCancel={handleCancel}
              scan={scan}
              flash={flashState}
              handleChangeFlash={handleChangeFlash}
            />
          );
        }}
      </RNCamera>
    </View>
  );
};

export default CameraScreen;
