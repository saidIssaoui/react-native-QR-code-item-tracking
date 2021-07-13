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
import {statuses} from './constants';
import SmallRedPlusCircle from '../../../components/static/icons/plus-circle/small/red';
import SmallPurplePlusCircle from '../../../components/static/icons/plus-circle/small/purple';
import SiretNumber from './siret-number';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const icon = <Chevron />;
const userLight = <User set="light" color={APP_PURPLE} size={32} />;
const userBold = <User set="bold" color={APP_PURPLE} size={24} />;
const workBold = <Work set="bold" color={APP_PURPLE} size={32} />;
const work = <Work set="light" color={APP_PURPLE} size={32} />;
const message = <Message set="light" color={APP_PURPLE} size={24} />;
const call = <Call set="light" color={APP_PURPLE} size={24} />;

const EstablishmentInformation = ({navigation}) => {
  const [sexe, setSexe] = useState('male');
  const handleChooseSexe = value => {
    setSexe(value);
  };
  const [siret, setSiret] = useState();
  const handleCompleteSiret = c => {
    setSiret(c);
  };
  const [establishment, setEstablishment] = useState('');
  const handleEstablishmentChange = value => {
    setEstablishment(value);
  };
  const [department, setDepartment] = useState('');
  const handleDepartmentChange = value => {
    setDepartment(value);
  };

  //#region Status
  const [openStatus, setOpenStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(true);
  const handleOpenStatus = () => {
    setOpenStatus(!openStatus);
  };
  const handleSelectStatus = id => {
    // # TODO ask about how to reset value
    const status = statuses.find(element => element.id === id);
    setSelectedStatus(status);
  };
  //#endregion

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

  const handleContinue = () => {
    navigation.navigate('Personal Information');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        </View>
        <View style={styles.topContainer}>
          <Margin mb1 />
          <View style={styles.iconContainer}>{workBold}</View>
          <Margin mb1 />
          <Text style={styles.iconText}>
            {T.translate('profile.establishment-information.title')}
          </Text>
          <Margin mb1 />
        </View>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.establishment-information.Establishment name')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={work}
            value={establishment}
            onChangeText={handleEstablishmentChange}
          />
          <Margin mb1 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.establishment-information.SIRET Number')}
            </Text>
          </View>
          <SiretNumber handleCompleteCode={handleCompleteSiret} />
          <Margin mb1 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.establishment-information.Gender')}
            </Text>
          </View>
          <Margin mb1 />
          <View style={styles.radioGroup}>
            <Radio
              color={sexe === 'male' ? APP_PURPLE : APP_GRAY}
              text={T.t('profile.establishment-information.Male')}
              selected={sexe === 'male'}
              onPress={() => handleChooseSexe('male')}
            />
            <Radio
              color={sexe === 'female' ? APP_PURPLE : APP_GRAY}
              text={T.t('profile.establishment-information.Female')}
              selected={sexe === 'female'}
              onPress={() => handleChooseSexe('female')}
            />
          </View>
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.establishment-information.Status')}
            </Text>
          </View>
          <Selector
            iconLeft={userLight}
            textMiddle={selectedStatus.label}
            iconRight={icon}
            onPress={handleOpenStatus}
            open={openStatus}>
            <View style={styles.selector}>
              <Center>
                {statuses.map(({id, label}) => (
                  <TouchableOpacity
                    onPress={() => handleSelectStatus(id)}
                    key={id}
                    style={styles.selectorItem}
                    disabled={selectedStatus.id === id}>
                    <Margin mb1 />
                    <Text
                      style={{
                        color: selectedStatus.id === id ? APP_PURPLE : BLACK,
                        fontFamily:
                          selectedStatus.id === id
                            ? 'Poppins-Medium'
                            : 'Poppins-Regular',
                        fontSize: selectedStatus.id === id ? 16 : 14,
                      }}>
                      {label}
                    </Text>
                    <Margin mb1 />
                  </TouchableOpacity>
                ))}
              </Center>
            </View>
          </Selector>
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('profile.establishment-information.Department')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={work}
            value={department}
            onChangeText={handleDepartmentChange}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t(
                'profile.establishment-information.Email address of your work',
              )}
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
              {T.t('profile.establishment-information.Phone number')}
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
            <TouchableOpacity
              onPress={handleContinue}
              style={styles.continueButton}>
              <Text style={styles.continueButtonText}>
                {T.t('profile.establishment-information.Continue')}
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

export default EstablishmentInformation;
