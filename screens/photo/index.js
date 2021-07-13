import React, {Fragment, useState} from 'react';
import {Alert, Image, Text, View, TouchableOpacity,PermissionsAndroid} from 'react-native';
import T from 'react-native-i18n';
import LaunchCamera from '../../components/camera/launcher';
import ScanQRCode from '../../components/camera/scan';
import Margin from '../../components/utils/margin';
import ItemImagePlaceholder from '../../components/camera/item-image-placeholder';
import ImagePicker from '../../components/buttons/image-picker';
import FlashController from '../../components/camera/flash-controller';
import styles from './index.styles';
import ValidateButton from '../../components/buttons/validate';
import Background from '../../components/static/backgound';
import {ChevronLeft} from 'react-native-iconly';
import {APP_DARK_GRAY} from '../../constants';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;

const Photo = ({navigation}) => {
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
      response => {
        
        if (response === false) {
          navigation.navigate('Camera Access');
        }
      },
    );
  const [uri, setUri] = useState(null);
  const handleResetUri = () => {
    setUri(null);
  };
  const handleReset = () => {
    Alert.alert('Reset photo', 'Are you sure to reset your photo?', [
      {
        text: 'Close',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => {
          handleResetUri();
        },
      },
    ]);
  };
  const handleImagePicked = uri => {
    setUri(uri);
  };
  const handlePictureURI = uri => {
    setUri(uri);
  };
  const handleLaunchCamera = () => {
    navigation.navigate('Camera', {handlePictureURI});
  };
  const handleRetakePhoto = () => {
    handleResetUri();
    handleLaunchCamera();
  };
  const handleValidate = () => {
    // alert(uri)
    navigation.navigate('Categories', {screen: 'Categories', data: uri});
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  return (
    <>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{T.t('photo.add')}</Text>
        </View>
        <View style={styles.cameraContainer}>
          {!uri && (
            <>
              <LaunchCamera onPress={handleLaunchCamera} />
              <Text style={styles.description}>{T.t('photo.description')}</Text>
            </>
          )}
          {uri && (
            <>
              <ItemImagePlaceholder
                uri={uri}
                onPress={handleRetakePhoto}
                handleReset={handleReset}
              />
              <Text style={styles.description}>{T.t('photo.retake')}</Text>
            </>
          )}
        </View>
        <View style={styles.pickerContainer}>
          <ImagePicker handleImagePicked={handleImagePicked}>
            <Image source={require('../../assets/images/image-picker.png')} />
          </ImagePicker>
          <Margin mt1 />
          <Text style={styles.pickerText}>{T.t('photo.picker')}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <ValidateButton disabled={!uri} onPress={handleValidate} />
        </View>
      </View>
      <Background />
    </>
  );
};
export default Photo;
