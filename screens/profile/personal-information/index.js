import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {ChevronLeft, Message, Call} from 'react-native-iconly';
import Background from '../../../components/static/backgound';
import styles from './index.styles';
import ThreeDots from '../../../components/static/icons/three-dots';
import {APP_DARK_GRAY, APP_GRAY, APP_PURPLE, BLACK} from '../../../constants';
import Margin from '../../../components/utils/margin';
import T from 'react-native-i18n';
import {User, Work} from 'react-native-iconly';
import Radio from '../../../components/inputs/radio';
import Input from '../../../components/inputs/text';
import Selector from '../../../components/inputs/selector';
import Chevron from '../../../components/inputs/selector/chevron';
import Center from '../../../components/utils/center';
import SmallRedPlusCircle from '../../../components/static/icons/plus-circle/small/red';
import SmallPurplePlusCircle from '../../../components/static/icons/plus-circle/small/purple';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const icon = <Chevron />;
const userLight = <User set="light" color={APP_PURPLE} size={32} />;
const userBold = <User set="bold" color={APP_PURPLE} size={24} />;
const work = <Work set="light" color={APP_PURPLE} size={32} />;
const message = <Message set="light" color={APP_PURPLE} size={24} />;
const call = <Call set="light" color={APP_PURPLE} size={24} />;

const PersonalInformation = ({navigation}) => {
  const [sexe, setSexe] = useState('male');
  const handleChooseSexe = value => {
    setSexe(value);
  };
  const [fullName, setFullName] = useState('Thomas Fallou');
  const handleFullNameChange = value => {
    setFullName(value);
  };

  const [email, setEmail] = useState('thomasfallou@gmail.com');
  const handleEmailChange = value => {
    setEmail(value);
  };

  const [phone, setPhone] = useState('+ 033 990 5666 6232');
  const handlePhoneChange = value => {
    setPhone(value);
  };

  const handlePressEmail = () => {
    alert('Email');
  };

  const handlePressPhone = () => {
    alert('Phone');
  };

  const handlePressBack = () => {
    navigation.pop();
  };

  const handleSave = () => {
    alert('Save');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        </View>
        <View style={styles.topContainer}>
          <Margin mb1 />
          <View style={styles.iconContainer}>{userBold}</View>
          <Margin mb1 />
          <Text style={styles.iconText}>
            {T.translate('profile.personal-information.title')}
          </Text>
          <Margin mb1 />
        </View>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.personal-information.Gender')}
            </Text>
          </View>
          <Margin mb1 />
          <View style={styles.radioGroup}>
            <Radio
              color={sexe === 'male' ? APP_PURPLE : APP_GRAY}
              text={T.t('profile.personal-information.Male')}
              selected={sexe === 'male'}
              onPress={() => handleChooseSexe('male')}
            />
            <Radio
              color={sexe === 'female' ? APP_PURPLE : APP_GRAY}
              text={T.t('profile.personal-information.Female')}
              selected={sexe === 'female'}
              onPress={() => handleChooseSexe('female')}
            />
          </View>
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.personal-information.First name & Last name')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={userLight}
            value={fullName}
            onChangeText={handleFullNameChange}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.personal-information.Email address of your work')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={message}
            value={email}
            iconRight={<SmallPurplePlusCircle />}
            onChangeText={handleEmailChange}
            action={handlePressEmail}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.personal-information.Phone number')}
            </Text>
          </View>
          <Input
            keyboardType="phone-pad"
            textAlign="center"
            iconLeft={call}
            value={phone}
            iconRight={<SmallPurplePlusCircle />}
            onChangeText={handlePhoneChange}
            action={handlePressPhone}
          />
          <Margin mb5 />
          <View style={{...styles.actionsHolder, justifyContent: 'center'}}>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>
                {T.t('profile.personal-information.Save')}
              </Text>
            </TouchableOpacity>
          </View>
          <Margin mb5 />
          <Margin mb5 />
        </ScrollView>
      </SafeAreaView>
      <Background />
    </>
  );
};

export default PersonalInformation;
