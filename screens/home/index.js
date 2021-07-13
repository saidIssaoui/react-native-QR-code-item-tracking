import React, {Fragment, useState, useContext, useEffect} from 'react';
import T from 'react-native-i18n';
import {Alert, Text, View} from 'react-native';
import LaunchCamera from '../../components/camera/launcher';
import ScanQRCode from '../../components/camera/scan';
import Margin from '../../components/utils/margin';
import ItemImagePlaceholder from '../../components/camera/item-image-placeholder';
import ImagePicker from '../../components/buttons/image-picker';
import FlashController from '../../components/camera/flash-controller';
import CustomButton from '../../components/buttons/custom';
import {
  WHITE,
  BLACK,
  APP_PURPLE,
  APP_RED,
  APP_GREEN,
  APP_ORANGE,
} from '../../constants';
import StaticScan from '../../components/static/scan';
import {
  Document,
  Plus,
  Show,
  Edit,
  Delete,
  User,
  Scan,
  People,
  Category,
} from 'react-native-iconly';
import ActionButton from '../../components/buttons/action';
import Notification from '../../components/buttons/notification';
import {Stripped as StrippedLogo} from '../../components/static/logo';
import Background from '../../components/static/backgound';
import PlusCircle from '../../components/static/icons/plus-circle';
import styles from './index.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const create = <PlusCircle />;
const scan = <Scan set="light" color={APP_PURPLE} size={48} />;
const catalogs = <Category set="light" color={APP_GREEN} size={48} />;
const members = <People set="light" color={APP_RED} size={48} />;

const HomeScreen = ({navigation, route}) => {
  const [firstName, setfirstName] = useState();
  const [surname, setsurname] = useState();
  const [iduser, setIduser] = useState();
  useEffect(() => {
    AsyncStorage.getItem('isName').then(result => setfirstName(result));
    AsyncStorage.getItem('isSurname').then(result => setsurname(result));
    AsyncStorage.getItem('isId').then(result => setIduser(result));
  }, []);

  const handleNotificationPress = () => {
    navigation.navigate('Notifications');
  };
  const handlePressCreate = () => {
    navigation.navigate('Create Item', {data: {title: 'fijr'}});
  };
  const handlePressScan = () => {
    navigation.navigate('Scan');
  };
  const handlePressCatalogue = () => {
    navigation.navigate('Catalogue');
  };
  const handlePressMembers = () => {
    navigation.navigate('Members');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topTop}>
            <Notification pending onPress={handleNotificationPress} />
          </View>
          <View style={styles.topMiddle}>
            <View style={styles.logo}>
              <StrippedLogo />
            </View>
            <Text style={styles.welcome}>{T.translate('home.Welcome')}</Text>
          </View>
          <View style={styles.topBottom}>
            <Text style={styles.name}>{firstName + ' ' + surname}</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.text}>{T.translate('home.Services')}</Text>
        </View>
        <View style={styles.bottom}>
          <Margin mt3 />
          <View style={{flexDirection: 'row'}}>
            <ActionButton
              icon={create}
              text={T.translate('home.Add object')}
              textColor={APP_PURPLE}
              onPress={handlePressCreate}
            />
            <Margin mr1 />
            <ActionButton
              icon={scan}
              text={T.translate('home.Scan')}
              textColor={APP_PURPLE}
              onPress={handlePressScan}
            />
          </View>
          <Margin mt2 />
          <View style={{flexDirection: 'row'}}>
            <ActionButton
              icon={catalogs}
              text={T.translate('home.My catalog')}
              textColor={APP_GREEN}
              onPress={handlePressCatalogue}
            />
            <Margin mr1 />
            <ActionButton
              icon={members}
              text={T.translate('home.My members')}
              textColor={APP_RED}
              onPress={handlePressMembers}
            />
          </View>
        </View>
      </View>
      <Background />
    </>
  );
};
export default HomeScreen;
