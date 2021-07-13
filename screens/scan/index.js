import React, {Fragment, useState, useContext, useEffect} from 'react';
import T from 'react-native-i18n';
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import LaunchCamera from '../../components/camera/launcher';
import ScanQRCode from '../../components/camera/scan';
import Margin from '../../components/utils/margin';
import ItemImagePlaceholder from '../../components/camera/item-image-placeholder';
import ImagePicker from '../../components/buttons/image-picker';
import FlashController from '../../components/camera/flash-controller';
import styles from './index.styles';
import CustomButton from '../../components/buttons/custom';
import {APP_PURPLE, WHITE} from '../../constants';
import StaticScan from '../../components/static/scan';
import Background from '../../components/static/backgound';

const ScanScreen = ({navigation}) => {
  
  
  const [scanMode, setscanMode] = useState();
  
  const [flash, setFlash] = useState(0);
  const handleChangeFlash = flash => {
    setFlash(flash);
  };
  const onPress = () => {
    //if()
    setscanMode(true);
  };
  const onPressAnnuler = () => {
    //if()
    setscanMode(false);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Margin mb2 />
          <Text style={styles.text}>{T.translate('scan.Scan QR code')}</Text>
          <Margin mb3 />
          <StaticScan
            navigation={navigation}
            flash={flash}
            scanMode={scanMode}
          />
        </View>
        <View style={styles.middle}>
          {scanMode ? (
            <TouchableOpacity style={styles.scan} onPress={onPressAnnuler}>
              <Text style={styles.scanText}>Annuler</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.scan} onPress={onPress}>
              <Text style={styles.scanText}>Scanner</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.bottom}>
          <FlashController
            flash={flash}
            handleChangeFlash={handleChangeFlash}
          />
        </View>
      </View>

      <Background />
    </>
  );
};
export default ScanScreen;
