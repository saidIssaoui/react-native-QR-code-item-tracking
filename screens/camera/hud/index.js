import React, {Fragment} from 'react';
import {View} from 'react-native';
import Capture from '../buttons/capture';
import styles from './index.styles';
import LinearGradient from 'react-native-linear-gradient';
import {BLACK} from '../../../constants';
import Back from '../buttons/back';
import Flash from '../buttons/flash';

const Hud = ({
  camera,
  scan,
  flash,
  handleTakePicture,
  handleCancel,
  handleChangeFlash,
}) => (
  <Fragment>
    <View style={styles.container}>
      <LinearGradient
        colors={[`${BLACK}00`, `${BLACK}88`]}
        style={styles.gradient}>
        {!scan && <Capture onPress={() => handleTakePicture(camera)} />}
      </LinearGradient>
    </View>
    <Back onPress={handleCancel} />
    <Flash flash={flash} onPress={handleChangeFlash} />
  </Fragment>
);

export default Hud;
