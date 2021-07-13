import React from 'react';
import {View} from 'react-native';
import styles from './index.styles';
import QrCodeScan from '../../../screens/QrScan';
const StaticScan = ({navigation, scanMode, flash}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.horizontal} />
        <View style={styles.vertical}>
          <View style={styles.middle}>
            {scanMode ? (
              <QrCodeScan flash={flash} ></QrCodeScan>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default StaticScan;
