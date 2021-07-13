import React, {useState, useEffect} from 'react';
import {
  Text,
  Alert,
  TouchableOpacity,
  Modal,
  Linking,
  PermissionsAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const QrCodeScan = ({flash}) => {
  
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
      response => {
        
        if (response === false) {
          navigation.navigate('Camera Access');
        }
      },
    );
  
  const navigation = useNavigation();
  const [qrCode, setqrCode] = useState('');

  const onRead = e => {
    setqrCode(e.data);
  };
  const onSuccess = e => {
    console.log('QR code scanned!', e.data);
  };

  const showAlert = e => {
    navigation.navigate('Item Details', {screen: 'Item Details', data: e.data});
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    //<ModalTester/>
    // Alert.alert(
    //   "QR scanner",
    //   e.data,
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => Alert.alert("Cancel Pressed"),
    //       style: "cancel",
    //     },
    //   ],
    //   {
    //     cancelable: true,
    //     onDismiss: () =>
    //       Alert.alert(
    //         "This alert was dismissed by tapping outside of the alert dialog."
    //       ),
    //   }
    // );
  };

  return (
    <QRCodeScanner
      onRead={showAlert}
      flashMode={flash}
      cameraStyle={styles.scanField}
      cameraProps={{ratio: '1:1'}}
      topContent={<Text style={styles.centerText}></Text>}
      
    />
  );
};

export default QrCodeScan;
