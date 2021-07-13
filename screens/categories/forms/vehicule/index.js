import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import T from 'react-native-i18n';
import styles from './index.styles';
import Background from '../../../../components/static/backgound';
import Margin from '../../../../components/utils/margin';
import ValidateButton from '../../../../components/buttons/validate';
import LightTriangle from '../../../../components/static/icons/light-triangle';
import Selector from '../../../../components/inputs/selector';
import Chevron from '../../../../components/inputs/selector/chevron';
import {APP_PURPLE, BLACK, WHITE} from '../../../../constants';
import Plus from '../../../../components/static/icons/plus';
import {types, brands, models, fuels, years} from './constants'; // # TODO change this to use context
import Kilometers from './kilometers';
import LaunchCamera from '../../../../components/camera/launcher';
import ImagePicker from '../../../../components/buttons/image-picker';
import ItemImagePlaceholder from '../../../../components/camera/item-image-placeholder';

const icon = <Chevron />;

const VehiculeFormScreen = ({
  route: {
    params: {id, uri, categorie},
  },
  navigation,
}) => {
  const [_id, set_Id] = useState();
  const [subcategorie, setsubcategorie] = useState();

  useEffect(() => {
    setsubcategorie(id);
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const getRandomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let _id = '';
    let idLength = 24;
    if (characters.length) {
      for (let i = 0; i < idLength; i++) {
        _id += characters[getRandomInteger(0, characters.length - 1)];
      }
      characters = '';
      idLength = 0;
      var confirmedid = _id;
      set_Id(confirmedid);
    }
  }, []);
  const handlePressCancel = () => {
    navigation.pop();
  };
const ribbonColor = '#673AB7'
  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      currenttypes,
      currentbrands,
      currentmodels,
      currentfuels,
      ribbonColor
    });
  };
  //#region Type
  const [openType, setOpenType] = useState(false);
  const [currenttypes, setcurrenttypes] = useState();
  const [selectedType, setSelectedType] = useState(true);
  const handleOpenType = () => {
    setOpenType(!openType);
  };
  const handleSelectType = id => {
    // # TODO ask about how to reset value
    const type = types.find(element => element.id === id);
    setSelectedType(type);
    setcurrenttypes(type.label)
  };
  //#endregion

  //#region Brand
  const [openBrand, setOpenBrand] = useState(false);
  const [currentbrands, setcurrentbrands] = useState();
  const [selectedBrand, setSelectedBrand] = useState(true);
  const handleOpenBrand = () => {
    setOpenBrand(!openBrand);
  };
  const handleSelectBrand = id => {
    // # TODO ask about how to reset value
    const brand = brands.find(element => element.id === id);
    setSelectedBrand(brand);
    setcurrentbrands(brand.label)
  };
  //#endregion

  //#region Model
  const [openModel, setOpenModel] = useState(false);
  const [currentmodels, setcurrentmodels] = useState();
  const [selectedModel, setSelectedModel] = useState(true);
  const handleOpenModel = () => {
    setOpenModel(!openModel);
  };
  const handleSelectModel = id => {
    // # TODO ask about how to reset value
    const model = models.find(element => element.id === id);
    setSelectedModel(model);
    setcurrentmodels(model.label)
  };
  //#endregion

  //#region Fuels
  const [openFuel, setOpenFuel] = useState(false);
  const [currentfuels, setcurrentfuels] = useState();
  const [selectedFuel, setSelectedFuel] = useState(true);
  const handleOpenFuel = () => {
    setOpenFuel(!openFuel);
  };
  const handleSelectFuel = id => {
    // # TODO ask about how to reset value
    const fuel = fuels.find(element => element.id === id);
    setSelectedFuel(fuel);
    setcurrentfuels(fuel.label)
  };
  //#endregion

  const [urivehicule, setvehiculeUri] = useState(null);
  const handleResetUri = () => {
    setvehiculeUri(null);
  };
  const handlePictureURI = urivehicule => {
    setvehiculeUri(urivehicule);
  };
  const handleLaunchCamera = () => {
    navigation.navigate('Camera', {handlePictureURI});
  };
  const handleRetakePhoto = () => {
    handleResetUri();
    handleLaunchCamera();
  };
  const handleImagePicked = urivehicule => {
    setvehiculeUri(urivehicule);
  };
  const handleReset = () => {
    Alert.alert('Reset photo', 'Are you sure to reset your photo?', [
      {
        text: 'Close',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => {
          handleResetUri();
        },
      },
    ]);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.cancelContainer}>
            <TouchableOpacity onPress={handlePressCancel}>
              <Text style={styles.cancelText}>
                {T.t('categories.form.Cancel')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <LightTriangle />
            <Text style={styles.title}>{T.t('categories.form.Details')}</Text>
          </View>
        </View>
        <Margin mb4 />
        <View style={styles.container}>
          <Selector
            textLeft={T.t('categories.form.vehicule.Type')}
            textMiddle={selectedType.label}
            iconRight={icon}
            onPress={handleOpenType}
            open={openType}>
            <View style={styles.selector}>
              {types.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectType(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedType.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedType.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedType.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedType.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <Selector
            textLeft={T.t('categories.form.vehicule.Brand')}
            textMiddle={selectedBrand.label}
            iconRight={icon}
            onPress={handleOpenBrand}
            open={openBrand}>
            <View style={styles.selector}>
              {brands.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectBrand(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedBrand.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedBrand.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedBrand.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedBrand.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <Selector
            textLeft={T.t('categories.form.vehicule.Model')}
            textMiddle={selectedModel.label}
            iconRight={icon}
            onPress={handleOpenModel}
            open={openModel}>
            <View style={styles.selector}>
              {models.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectModel(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedModel.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedModel.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedModel.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedModel.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <Selector
            textLeft={T.t('categories.form.vehicule.Fuel')}
            textMiddle={selectedFuel.label}
            iconRight={icon}
            onPress={handleOpenFuel}
            open={openFuel}>
            <View style={styles.selector}>
              {fuels.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectFuel(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedFuel.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedFuel.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedFuel.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedFuel.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <Text>Years</Text>
          <Margin mb3 />
          <View style={styles.headerContainer}>
            <Text style={styles.kilometersHeader}>
              {T.t('categories.form.vehicule.Kilometers')}
            </Text>
          </View>
          <Margin mt1 />
          <View style={styles.kilometersContainer}>
            <Kilometers />
            <Margin mr2 />
            <Kilometers characters={4} />
            <Margin mr2 />
            <Text style={styles.kilometers}>
              {T.t('categories.form.vehicule.Kilometers')}
            </Text>
          </View>
          <Margin mb3 />
          <View style={styles.headerContainer}>
            <Text style={styles.grayCardHeader}>
              {T.t('categories.form.vehicule.Gray Card')}
            </Text>
          </View>
          <Margin mt1 />
          <View style={styles.cameraContainer}>
            {!urivehicule && (
              <LaunchCamera
                onPress={handleLaunchCamera}
                icon={<Plus size={36} />}
              />
            )}
            {urivehicule && (
              <ItemImagePlaceholder
              urivehicule={urivehicule}
                onPress={handleRetakePhoto}
                handleReset={handleReset}
              />
            )}
          </View>
        </View>
        <Margin mb5 />
        <View style={styles.footer}>
          <ValidateButton onPress={handleValidate} />
        </View>
        <Margin mb5 />
      </ScrollView>
      <Background />
    </>
  );
};

export default VehiculeFormScreen;
