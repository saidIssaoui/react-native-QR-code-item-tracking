import React, {Fragment, useState} from 'react';
import CameraView from '../../components/camera/view';
import {Alert, Text, View} from 'react-native';
import LaunchCamera from '../../components/camera/launcher';
import ScanQRCode from '../../components/camera/scan';
import Margin from '../../components/utils/margin';
import ItemImagePlaceholder from '../../components/camera/item-image-placeholder';
import ImagePicker from '../../components/buttons/image-picker';
import FlashController from '../../components/camera/flash-controller';

const Scan = () => {
  const [screen, setScreen] = useState('APP');
  const [scan, setScan] = useState(false);
  const [scannedData, setScannedData] = useState(false);
  const handleChangeScreen = screen => {
    setScreen(screen);
  };
  const handleCancel = () => {
    setScreen('APP');
  };
  const [uri, setUri] = useState(null);
  const handleResetUri = () => {
    setUri(null);
  };
  const handlePictureURI = uri => {
    setUri(uri);
    handleChangeScreen('APP');
  };
  const handleQRCodeRead = ({data}) => {
    handleChangeScreen('APP');
    setScannedData(data);
  };
  const handleReset = () => {
    Alert.alert('Reset photo', 'Are you sure to reset your photo?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => {
          setUri(null);
        },
      },
      {
        text: 'Take another',
        onPress: () => {
          handleResetUri();
          handleChangeScreen('CAMERA');
        },
      },
    ]);
  };
  const [flash, setFlash] = useState(0);
  const handleChangeFlash = flash => {
    setFlash(flash);
  };
  const handleImagePicked = uri => {
    setUri(uri);
  };
  return (
    <Fragment>
      {screen === 'APP' && (
        <View style={{alignItems: 'center'}}>
          <Margin mb5 />
          <LaunchCamera
            onPress={() => {
              setScan(false);
              handleChangeScreen('CAMERA');
            }}
          />
          <Margin mb2 />
          <ItemImagePlaceholder uri={uri} handleReset={handleReset} />
          <Margin mb2 />
          <ScanQRCode
            onPress={() => {
              setScan(true);
              setScannedData(null);
              handleChangeScreen('CAMERA');
            }}
          />
          <Margin mb1 />
          {
            <Text>
              {scannedData ? 'Scanned data: ' + scannedData : 'Scan QR Code'}
            </Text>
          }
          <Margin mb1 />
          <FlashController
            flash={flash}
            handleChangeFlash={handleChangeFlash}
          />
          <ImagePicker handleImagePicked={handleImagePicked} />
        </View>
      )}
      <Fragment>
        {screen === 'CAMERA' && (
          <CameraView
            flash={flash}
            scan={scan}
            handleCancel={handleCancel}
            handlePictureURI={handlePictureURI}
            handleQRCodeRead={handleQRCodeRead}
          />
        )}
      </Fragment>
    </Fragment>
  );
};
export default Scan;
