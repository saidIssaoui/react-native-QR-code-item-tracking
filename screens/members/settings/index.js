import React, {useState, useEffect} from 'react';
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
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_RED,
  BLACK,
} from '../../../constants';
import Margin from '../../../components/utils/margin';
import T from 'react-native-i18n';
import {User, Work} from 'react-native-iconly';
import Radio from '../../../components/inputs/radio';
import Input from '../../../components/inputs/text';
import Selector from '../../../components/inputs/selector';
import Chevron from '../../../components/inputs/selector/chevron';
import {statuses, departments} from './constants';
import Center from '../../../components/utils/center';
import SmallRedPlusCircle from '../../../components/static/icons/plus-circle/small/red';
import axios from 'axios';
import {sendEmail} from './send-email';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const icon = <Chevron />;
const userLight = <User set="light" color={APP_RED} size={32} />;
const userBold = <User set="bold" color={APP_RED} size={24} />;
const work = <Work set="light" color={APP_RED} size={32} />;
const message = <Message set="light" color={APP_RED} size={24} />;
const call = <Call set="light" color={APP_RED} size={24} />;

const MemberSettings = ({
  navigation,
  route: {params: {isNew = false} = {}},
}) => {
  const [sexe, setSexe] = useState('male');
  const handleChooseSexe = value => {
    setSexe(value);
  };
  const [contract, setContract] = useState('fixed-term');
  const handleChooseContract = value => {
    setContract(value);
  };
  const [lastName, setLastName] = useState('Alley');
  const handleLastNameChange = value => {
    setLastName(value);
  };
  const [firstName, setFirstName] = useState('Alice');
  const handleFirstNameChange = value => {
    setFirstName(value);
  };

  //#region Status
  const [openStatus, setOpenStatus] = useState(false);
  const [correntStatus, setCorrentStatus] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(true);
  const handleOpenStatus = () => {
    setOpenStatus(!openStatus);
  };
  const handleSelectStatus = id => {
    // # TODO ask about how to reset value
    const status = statuses.find(element => element.id === id);
    setSelectedStatus(status);
    setCorrentStatus(status.label);
  };
  //#endregion

  //#region Department
  const [openDepartment, setOpenDepartment] = useState(false);
  const [correntDepartment, setCorrentDepartment] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(true);
  const handleOpenDepartment = () => {
    setOpenDepartment(!openDepartment);
  };
  const handleSelectDepartment = id => {
    // # TODO ask about how to reset value
    const department = departments.find(element => element.id === id);
    setSelectedDepartment(department);
    setCorrentDepartment(department.label);
  };
  //#endregion

  const [email, setEmail] = useState('said.issaoui1975@gmail.com');
  const handleEmailChange = value => {
    setEmail(value);
  };

  const [phone, setPhone] = useState('+ 216  90 586 625');
  const handlePhoneChange = value => {
    setPhone(value);
  };

  const [hasCancel] = useState(true);

  const handlePressEmail = () => {
    alert('Email');
  };

  const handlePressPhone = () => {
    alert('Phone');
  };

  const handlePress = id => {
    alert(id);
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressContextual = () => {
    alert('Contextual');
  };
  const handleCancel = () => {
    alert('Cancel');
  };
  const handleSave = () => {
    ImageHolder();
  };
  const handleAdd = () => {
    alert('Add');
  };
  const [randompassword, setrandompassword] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789';
    const getRandomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let password = '';
    let passwordLength = 10;
    if (characters.length) {
      for (let i = 0; i < passwordLength; i++) {
        password += characters[getRandomInteger(0, characters.length - 1)];
      }
      characters = '';
      passwordLength = 0;
      var confirmedpassword = password;
      setrandompassword(confirmedpassword);
    }
  }, []);

  const ImageHolder = () => {
    if (sexe != 'male') {
      var result = [
        'www.linkpicture.com/q/9_70.png',
        'www.linkpicture.com/q/10_61.png',
        'www.linkpicture.com/q/11_68.png',
        'www.linkpicture.com/q/cu9_800.jpg',
      ];
      var image2 = result[Math.floor(Math.random() * result.length)];
      var image = image2;
      setImage(image);
    } else {
      var result = [
        `www.linkpicture.com/q/2_281.png`,
        'www.linkpicture.com/q/3_210.png',
        'www.linkpicture.com/q/4_192.png',
        'www.linkpicture.com/q/5_136.png',
        'www.linkpicture.com/q/7_91.png',
        'www.linkpicture.com/q/8_76.png',
      ];
      var image2 = result[Math.floor(Math.random() * result.length)];
      var image = image2;
      setImage(image);
    }

    /* sendEmail(
      email,
      'your email and password are: ' + randompassword + '  ' + email,
      "Don't forget to save them",
      {cc: 'issaoui.said.info@gmail.com;'},
    ).then(() => {
      alert('Your message was successfully sent!');
    });*/

    const userObject = {
      genre: sexe,
      nom: lastName,
      prenom: firstName,
      statu: correntStatus,
      departement: correntDepartment,
      type_contrat: contract,
      email: email,
      phone: phone,
      image: image,
      password: randompassword,
    };
    console.log(randompassword);
    axios
      .post('http://192.168.1.14:9000/api/utilisateur', userObject)
      .then(function (response) {
        // handle success
        //alert('Member added successfully');
        sendEmail(
          email,
          'Phareme Account',
          `your email and password are:  \n${email} \n${randompassword} \nDon't forget to save them`,
          {cc: 'issaoui.said.info@gmail.com;'},
        ).then(() => {
          navigation.navigate('Members');
        });
      })
      .catch(function (error) {
        // handle error
        alert('il y a pas un error lors de sauvgarde des donneés');
      });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
          <TouchableOpacity onPress={handlePressContextual}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
        <View style={styles.topContainer}>
          <Margin mb1 />
          <View style={styles.iconContainer}>{userBold}</View>
          <Margin mb1 />
          <Text style={styles.iconText}>
            {T.translate('members.settings.title')}
          </Text>
          <Margin mb1 />
        </View>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{T.t('members.settings.Gender')}</Text>
          </View>
          <Margin mb1 />
          <View style={styles.radioGroup}>
            <Radio
              color={sexe === 'male' ? APP_RED : APP_GRAY}
              text={T.t('members.settings.Male')}
              selected={sexe === 'male'}
              onPress={() => handleChooseSexe('male')}
            />
            <Radio
              color={sexe === 'female' ? APP_RED : APP_GRAY}
              text={T.t('members.settings.Female')}
              selected={sexe === 'female'}
              onPress={() => handleChooseSexe('female')}
            />
          </View>
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('members.settings.Last name')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={userLight}
            value={lastName}
            onChangeText={handleLastNameChange}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('members.settings.First name')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={userLight}
            value={firstName}
            onChangeText={handleFirstNameChange}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{T.t('members.settings.Status')}</Text>
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
              {T.t('members.settings.Department')}
            </Text>
          </View>
          <Selector
            iconLeft={work}
            textMiddle={selectedDepartment.label}
            iconRight={icon}
            onPress={handleOpenDepartment}
            open={openDepartment}>
            <View style={styles.selector}>
              <Center>
                {departments.map(({id, label}) => (
                  <TouchableOpacity
                    onPress={() => handleSelectDepartment(id)}
                    key={id}
                    style={styles.selectorItem}
                    disabled={selectedDepartment.id === id}>
                    <Margin mb1 />
                    <Text
                      style={{
                        color:
                          selectedDepartment.id === id ? APP_PURPLE : BLACK,
                        fontFamily:
                          selectedDepartment.id === id
                            ? 'Poppins-Medium'
                            : 'Poppins-Regular',
                        fontSize: selectedDepartment.id === id ? 16 : 14,
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
              {T.t('members.settings.Contract type')}
            </Text>
          </View>
          <View style={styles.radioGroup}>
            <Radio
              color={contract === 'fixed-term' ? APP_RED : APP_GRAY}
              text={T.t('members.settings.Fixed-term')}
              selected={contract === 'fixed-term'}
              onPress={() => handleChooseContract('fixed-term')}
            />
            <Radio
              color={contract === 'permanent' ? APP_RED : APP_GRAY}
              text={T.t('members.settings.Permanent')}
              selected={contract === 'permanent'}
              onPress={() => handleChooseContract('permanent')}
            />
          </View>
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('members.settings.Email address')}
            </Text>
          </View>
          <Input
            textAlign="center"
            iconLeft={message}
            value={email}
            iconRight={<SmallRedPlusCircle />}
            onChangeText={handleEmailChange}
            action={handlePressEmail}
          />
          <Margin mb2 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('members.settings.Phone number')}
            </Text>
          </View>
          <Input
            keyboardType="phone-pad"
            textAlign="center"
            iconLeft={call}
            value={phone}
            iconRight={<SmallRedPlusCircle />}
            onChangeText={handlePhoneChange}
            action={handlePressPhone}
          />
          <Margin mb5 />
          <View
            style={{
              ...styles.actionsHolder,
              justifyContent: hasCancel ? 'space-between' : 'center',
            }}>
            {hasCancel && (
              <TouchableOpacity onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>
                  {T.t('members.settings.Cancel')}
                </Text>
              </TouchableOpacity>
            )}
            {isNew ? (
              <TouchableOpacity onPress={handleAdd} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>
                  {T.t('members.settings.Add')}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>
                  {T.t('members.settings.Save')}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Margin mb5 />
        </ScrollView>
      </SafeAreaView>
      <Background />
    </>
  );
};

export default MemberSettings;
