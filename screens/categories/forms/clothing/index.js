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

import {
  brands,
  sizes,
  states,
  availabilities,
  precisions,
  colors,
} from './constants'; // # TODO change this to use context

const icon = <Chevron />;

const ClothingFormScreen = ({route: {
  params: {id, uri, categorie},
},
navigation,
}) => {
const [_id, set_Id] = useState();
const [subcategorie, setsubcategorie] = useState();
const ribbonColor ='#FFC107'
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

  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      currentbrands,
  currentsizes,
  currentstates,
  currentavailabilities,
  currentprecisions,
  currentcolors,
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

  //#region Sizes
  const [openSize, setOpenSize] = useState(false);
  const [currentsizes, setcurrentsize] = useState();
  const [selectedSize, setSelectedSize] = useState(true);
  const handleOpenSize = () => {
    setOpenSize(!openSize);
  };
  const handleSelectSize = id => {
    // # TODO ask about how to reset value
    const size = sizes.find(element => element.id === id);
    setSelectedSize(size);
    setcurrentsize(size.label)
  };
  //#endregion

  //#region Colors
  const [openColor, setOpenColor] = useState(false);
  const [currentcolors, setcurrentcolor] = useState();
  const [selectedColor, setSelectedColor] = useState(true);
  const handleOpenColor = () => {
    setOpenColor(!openColor);
  };
  const handleSelectColor = id => {
    // # TODO ask about how to reset value
    const color = colors.find(element => element.id === id);
    setSelectedColor(color);
    setcurrentcolor(color.label)
  };
  //#endregion

  //#region State
  const [openState, setOpenState] = useState(false);
  const [currentstates, setcorrentstate] = useState();
  const [selectedState, setSelectedState] = useState(true);
  const handleOpenState = () => {
    setOpenState(!openState);
  };
  const handleSelectState = id => {
    // # TODO ask about how to reset value
    const state = states.find(element => element.id === id);
    setSelectedState(state);
    setcorrentstate(state.label)
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
    setcurrentprecision(precision.label)
  };
  //#endregion

  //#region Availability
  const [openAvailability, setOpenAvailability] = useState(false);
  const [currentavailabilities, setcurrentavailability] = useState();
  const [selectedAvailability, setSelectedAvailability] = useState(true);
  const handleOpenAvailability = () => {
    setOpenAvailability(!openAvailability);
  };
  const handleSelectAvailability = id => {
    // # TODO ask about how to reset value
    const availability = availabilities.find(element => element.id === id);
    setSelectedAvailability(availability);
    setcurrentavailability(availability.label)
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
            textLeft={T.t('categories.form.clothing.Brand')}
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
            textLeft={T.t('categories.form.clothing.Size')}
            textMiddle={selectedSize.label}
            iconRight={icon}
            onPress={handleOpenSize}
            open={openSize}>
            <View style={styles.selector}>
              {sizes.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectSize(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedSize.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedSize.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedSize.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedSize.id === id ? 16 : 14,
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
            textLeft={T.t('categories.form.clothing.Color')}
            textMiddle={selectedColor.label}
            iconRight={icon}
            onPress={handleOpenColor}
            open={openColor}>
            <View style={styles.selector}>
              {colors.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectColor(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedColor.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedColor.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedColor.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedColor.id === id ? 16 : 14,
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
            textLeft={T.t('categories.form.clothing.State')}
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
            textLeft={T.t('categories.form.clothing.Precision')}
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
          <Selector
            textLeft={T.t('categories.form.clothing.Availability')}
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

export default ClothingFormScreen;
