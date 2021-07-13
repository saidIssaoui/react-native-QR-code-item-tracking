import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import styles from './index.styles';
import Background from '../../../../components/static/backgound';
import Margin from '../../../../components/utils/margin';
import ValidateButton from '../../../../components/buttons/validate';
import LightTriangle from '../../../../components/static/icons/light-triangle';
import Selector from '../../../../components/inputs/selector';
import Chevron from '../../../../components/inputs/selector/chevron';
import {APP_PURPLE, BLACK} from '../../../../constants';

import {brands, states, availabilities, precisions} from './constants'; // # TODO change this to use context
import Rating from '../../../../components/inputs/rating';

const icon = <Chevron />;

const EquipmentFormScreen = ({route: {
  params: {id, uri, categorie},
},
navigation,
}) => {
const [_id, set_Id] = useState();
const [subcategorie, setsubcategorie] = useState();

useEffect(() => {
  setsubcategorie(id)
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
  const ribbonColor ='#8BC34A'
  const handleValidate = () => {
    navigation.navigate('Attribution',{
      _id,
      subcategorie,
      uri,
      categorie,
      currentbrands,
  currentstates,
  currentavailabilities,
  currentprecisions,
  ribbonColor
    });
  };
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

  //#region State
  const [openState, setOpenState] = useState(false);
  const [currentstates, setcurrentstates] = useState();
  const [selectedState, setSelectedState] = useState(true);
  const handleOpenState = () => {
    setOpenState(!openState);
  };
  const handleSelectState = id => {
    // # TODO ask about how to reset value
    const state = states.find(element => element.id === id);
    setSelectedState(state);
    setcurrentstates(state.label)
  };
  //#endregion

  //#region Precision
  const [openPrecision, setOpenPrecision] = useState(false);
  const [currentprecisions, setcurrentprecision] = useState();
  const [selectedPrecision, setSelectedPrecision] = useState(true);
  const handleOpenPrecision = () => {
    setOpenPrecision(!openPrecision);
  };
  const handleSelectPrecision = id => {
    // # TODO ask about how to reset value
    const precision = precisions.find(element => element.id === id);
    setSelectedPrecision(precision);
    setcurrentprecisionsetcurrentprecision(precision.label)
  };
  //#endregion

  //#region Rating
  const [rating, setRating] = useState(3);
  const handleSetRating = r => {
    if (rating === r) {
      setRating(0);
    } else {
      setRating(r);
    }
  };
  //#endregion

  //#region Availability
  const [openAvailability, setOpenAvailability] = useState(false);
  const [currentavailabilities, setcurrentavailabilities] = useState();
  const [selectedAvailability, setSelectedAvailability] = useState(true);
  const handleOpenAvailability = () => {
    setOpenAvailability(!openAvailability);
  };
  const handleSelectAvailability = id => {
    // # TODO ask about how to reset value
    const availability = availabilities.find(element => element.id === id);
    setSelectedAvailability(availability);
    setcurrentavailabilities(availability.label)
  };
  //#endregion

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
            textLeft={T.t('categories.form.equipment.Brand')}
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
            textLeft={T.t('categories.form.equipment.State')}
            textMiddle={selectedState.label}
            iconRight={icon}
            onPress={handleOpenState}
            open={openState}>
            <View style={styles.selector}>
              {states.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectState(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedState.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedState.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedState.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedState.id === id ? 16 : 14,
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
            textLeft={T.t('categories.form.equipment.Precision')}
            textMiddle={selectedPrecision.label}
            iconRight={icon}
            onPress={handleOpenPrecision}
            open={openPrecision}>
            <View style={styles.selector}>
              {precisions.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectPrecision(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedPrecision.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedPrecision.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedPrecision.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedPrecision.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <Rating
            text={T.t('categories.form.equipment.Value')}
            rating={rating}
            handleSetRating={handleSetRating}
          />
          <Margin mb3 />
          <Selector
            textLeft={T.t('categories.form.equipment.Availability')}
            textMiddle={selectedAvailability.label}
            iconRight={icon}
            onPress={handleOpenAvailability}
            open={openAvailability}>
            <View style={styles.selector}>
              {availabilities.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectAvailability(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedAvailability.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color:
                        selectedAvailability.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedAvailability.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedAvailability.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
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

export default EquipmentFormScreen;
