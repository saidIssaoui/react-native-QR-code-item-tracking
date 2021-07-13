import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity,PermissionsAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Background from '../../components/static/backgound';
const AccessCamera = () => {
  const navigation = useNavigation();

  const requestCameraPermission =  () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted) {
        alert("You can use the camera");
        navigation.pop();
      } else {
        alert("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const onPress = () => {
    navigation.goBack(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image
          style={styles.introImageStyle}
          source={require('../../assets/cameraAccess.png')}
        />
        <Text style={styles.introTitleStyle}>
          {"Autoriser L'accés \n à votre camera"}
        </Text>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.deny} onPress={onPress}>
            <Text style={styles.denyText}>Refuser</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.graint} onPress={requestCameraPermission}>
            <Text style={styles.graintText}>Autoriser</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Background />
    </View>
  );
};
export default AccessCamera;
