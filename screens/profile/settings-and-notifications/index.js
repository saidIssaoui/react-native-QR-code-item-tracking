import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  MoreCircle,
  Lock,
  ShieldDone,
  InfoCircle,
  Star,
  Notification as Bell,
  Camera,
} from 'react-native-iconly';
import Background from '../../../components/static/backgound';
import T from 'react-native-i18n';
import styles from './index.styles';
import {APP_DARK_GRAY, APP_RED, APP_VERSION} from '../../../constants';
import Margin from '../../../components/utils/margin';
import ThreeDots from '../../../components/static/icons/three-dots';
import InventoryStatus from '../../../components/inventory/status';
import ContentHolder from '../../../components/holders/content-holder';
import Duplicate from '../../../components/static/icons/duplicate';
import PlusCircle from '../../../components/static/icons/plus-circle/small';
import SettingsLink from '../../../components/buttons/settings/links';
import SettingsToggle from '../../../components/buttons/settings/toggle';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const next = <ChevronRight set="light" color={APP_DARK_GRAY} size={24} />;
const bell = <Bell color={APP_DARK_GRAY} size={24} />;
const camera = <Camera color={APP_DARK_GRAY} size={24} />;
const edit = <Edit color={APP_DARK_GRAY} size={24} />;
const more = <MoreCircle color={APP_DARK_GRAY} size={24} />;
const lock = <Lock color={APP_DARK_GRAY} size={24} />;
const sheild = <ShieldDone color={APP_DARK_GRAY} size={24} />;
const info = <InfoCircle color={APP_DARK_GRAY} size={24} />;
const star = <Star color={APP_DARK_GRAY} size={24} />;

const SettingsAndNotificationsScreen = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate('Welcome');
  };

  const handlePressBack = () => {
    navigation.pop();
  };

  const [isPending, setIsPending] = useState(true);
  const handlePressNotification = () => {
    setIsPending(!isPending);
  };

  const [hasItems, setHasItems] = useState(true);
  const handleToggleStatus = () => {
    setHasItems(!hasItems);
  };

  const [notificationsActive, setNotificationsActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);

  const handleToggleNotificationActive = () => {
    setNotificationsActive(!notificationsActive);
  };

  const handleToggleCameraActive = () => {
    setCameraActive(!cameraActive);
  };

  const handleContactUs = () => {
    alert('Contact us');
  };

  const handleFAQ = () => {
    alert('FAQ');
  };

  const handlePrivacyPolicy = () => {
    alert('Privacy Policy');
  };

  const handleSecurity = () => {
    alert('Security');
  };

  const handleAroundUs = () => {
    alert('Around us');
  };

  const handleRate = () => {
    alert('Rate');
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center'}}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        </View>
        <Margin mb2 />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            {T.t(
              'profile.settings-and-notifications.Settings and notifications',
            )}
          </Text>
        </View>
        <View style={styles.middle}>
          <ContentHolder rounded>
            <View style={styles.actionsHolder}>
              <Margin mb1 />
              <SettingsToggle
                active={notificationsActive}
                iconLeft={bell}
                text={T.t('profile.settings-and-notifications.Notifications')}
                onPress={handleToggleNotificationActive}
              />
              <SettingsToggle
                active={cameraActive}
                iconLeft={camera}
                text={T.t('profile.settings-and-notifications.Camera')}
                onPress={handleToggleCameraActive}
              />
              <Margin mb1 />
            </View>
          </ContentHolder>
        </View>
        <Margin mb3 />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            {T.t('profile.settings-and-notifications.Preferences')}
          </Text>
        </View>
        <View style={styles.middle}>
          <ContentHolder rounded>
            <View style={styles.actionsHolder}>
              <Margin mb1 />
              <SettingsLink
                iconLeft={edit}
                text={T.t('profile.settings-and-notifications.Contact us')}
                iconRight={next}
                onPress={handleContactUs}
              />
              <SettingsLink
                iconLeft={more}
                text={T.t(
                  'profile.settings-and-notifications.Frequently asked questions',
                )}
                iconRight={next}
                onPress={handleFAQ}
              />
              <SettingsLink
                iconLeft={lock}
                text={T.t('profile.settings-and-notifications.Privacy policy')}
                iconRight={next}
                onPress={handlePrivacyPolicy}
              />
              <SettingsLink
                iconLeft={sheild}
                text={T.t('profile.settings-and-notifications.Security')}
                iconRight={next}
                onPress={handleSecurity}
              />
              <SettingsLink
                iconLeft={info}
                text={T.t('profile.settings-and-notifications.Around us')}
                iconRight={next}
                onPress={handleAroundUs}
              />
              <SettingsLink
                iconLeft={star}
                text={T.t('profile.settings-and-notifications.Rate the app')}
                iconRight={next}
                onPress={handleRate}
              />
              <Margin mb1 />
            </View>
          </ContentHolder>
          <Margin mb4 />
          <Text style={styles.textVersion}>Pharme V {APP_VERSION}</Text>
        </View>
        <Margin mb5 />
      </ScrollView>
      <Background />
    </>
  );
};

export default SettingsAndNotificationsScreen;
