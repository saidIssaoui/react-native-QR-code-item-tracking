import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Notification from '../../components/buttons/notification';
import {
  AddUser,
  People,
  ChevronLeft,
  ChevronRight,
  Setting,
  Work,
  User,
} from 'react-native-iconly';
import Background from '../../components/static/backgound';
import T from 'react-native-i18n';
import styles from './index.styles';
import {APP_DARK_GRAY, APP_RED, APP_VERSION} from '../../constants';
import Margin from '../../components/utils/margin';
import ThreeDots from '../../components/static/icons/three-dots';
import InventoryStatus from '../../components/inventory/status';
import ContentHolder from '../../components/holders/content-holder';
import Duplicate from '../../components/static/icons/duplicate';
import PlusCircle from '../../components/static/icons/plus-circle/small';
import SettingsLink from '../../components/buttons/settings/links';
import AsyncStorage from '@react-native-async-storage/async-storage';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const next = <ChevronRight set="light" color={APP_DARK_GRAY} size={24} />;
const user = <User color={APP_DARK_GRAY} size={24} />;
const work = <Work color={APP_DARK_GRAY} size={24} />;
const settings = <Setting color={APP_DARK_GRAY} size={24} />;

const ProfileScreen = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.removeItem('isNotSignedIn').then(() =>
      AsyncStorage.getItem('isNotSignedIn').then(
        result => console.log(result),
        navigation.navigate('Authentication'),
      ),
    );
  };

  const handlePressBack = () => {
    alert('Back');
  };

  const [isPending, setIsPending] = useState(true);
  const handlePressNotification = () => {
    setIsPending(!isPending);
  };

  const [hasItems, setHasItems] = useState(true);
  const handleToggleStatus = () => {
    setHasItems(!hasItems);
  };

  const handlePersonalInformation = () => {
    navigation.navigate('Personal Information');
  };

  const handleEstablishment = () => {
    navigation.navigate('Establishment Information');
  };

  const handleNotificationSettings = () => {
    navigation.navigate('Settings And Notifications');
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center'}}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
          <Notification pending={isPending} onPress={handlePressNotification} />
        </View>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/avatars/1.png')}
            />
          </View>
          <Margin mb1 />
          <Text style={styles.username}>Pharmeapp</Text>
          <Margin mb1 />
        </View>
        <TouchableOpacity onPress={handleToggleStatus}>
          <View style={styles.itemsInfoContainer}>
            <InventoryStatus
              titleLeft={T.t('profile.Items')}
              titleRight={T.t('profile.Rendered')}
              subtitleLeft={hasItems ? 440 : 0}
              subtitleRight={hasItems ? 20 : 0}
            />
          </View>
        </TouchableOpacity>
        <Margin mb3 />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            {T.t('profile.Account settings')}
          </Text>
        </View>
        <View style={styles.middle}>
          <ContentHolder rounded>
            <View style={styles.actionsHolder}>
              <Margin mb1 />
              <SettingsLink
                iconLeft={user}
                text={T.t('profile.Personal information')}
                iconRight={next}
                onPress={handlePersonalInformation}
              />
              <SettingsLink
                iconLeft={work}
                text={T.t('profile.Establishment & status')}
                iconRight={next}
                onPress={handleEstablishment}
              />
              <SettingsLink
                iconLeft={settings}
                text={T.t('profile.Notifications settings')}
                iconRight={next}
                onPress={handleNotificationSettings}
              />
              <Margin mb1 />
            </View>
          </ContentHolder>
          <Margin mb2 />
          <TouchableOpacity
            style={styles.buttonLogoutContainer}
            onPress={handleLogout}>
            <ContentHolder rounded>
              <View style={styles.buttonLogout}>
                <Text style={styles.buttonLogoutText}>
                  {T.t('profile.Sign out')}
                </Text>
              </View>
            </ContentHolder>
          </TouchableOpacity>
          <Margin mb2 />
          <Text style={styles.textVersion}>Pharme V {APP_VERSION}</Text>
        </View>
        <Margin mb5 />
      </ScrollView>
      <Background />
    </>
  );
};

export default ProfileScreen;
