import React, {useState, useEffect} from 'react';
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

import {levels, states, availabilities, precisions} from './constants'; // # TODO change this to use context

const icon = <Chevron />;

const BooksAndDocumentsFormScreen = ({
  route: {
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
  // console.log(randomID)
  const handlePressCancel = () => {
    navigation.pop();
  };
  //console.log(id + ' ' + uri + '  ' + categorie);7
  const ribbonColor ='#009688'
  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      correntlevels,
      currentavailabilities,
      currentprecisions,
      currentstates,
      ribbonColor
    });
  };

  //#region Level
  const [openLevel, setOpenLevel] = useState(false);
  const [correntlevels, setCorrentLevel] = useState();
  const [selectedLevel, setSelectedLevel] = useState(true);
  const handleOpenLevel = () => {
    setOpenLevel(!openLevel);
  };
  const handleSelectLevel = id => {
    // # TODO ask about how to reset value
    const level = levels.find(element => element.id === id);
    setSelectedLevel(level);
    setCorrentLevel(level.label);
  };
  //#endregion

  //#region State
  const [openState, setOpenState] = useState(false);
  const [currentstates, setcurrentState] = useState();
  const [selectedState, setSelectedState] = useState(true);
  const handleOpenState = () => {
    setOpenState(!openState);
  };
  const handleSelectState = id => {
    // # TODO ask about how to reset value
    const state = states.find(element => element.id === id);
    setSelectedState(state);
    setcurrentState(state.label);
  };
  //#endregion

  //#region Precision
  const [openPrecision, setOpenPrecision] = useState(false);
  const [currentprecisions, setcurrentPrecision] = useState();
  const [selectedPrecision, setSelectedPrecision] = useState(true);
  const handleOpenPrecision = () => {
    setOpenPrecision(!openPrecision);
  };
  const handleSelectPrecision = id => {
    // # TODO ask about how to reset value
    const precision = precisions.find(element => element.id === id);
    setSelectedPrecision(precision);
    setcurrentPrecision(precision.label);
  };
  //#endregion

  //#region Availability
  const [openAvailability, setOpenAvailability] = useState(false);
  const [currentavailabilities, setcurrentAvailability] = useState();
  const [selectedAvailability, setSelectedAvailability] = useState(true);
  const handleOpenAvailability = () => {
    setOpenAvailability(!openAvailability);
  };
  const handleSelectAvailability = id => {
    // # TODO ask about how to reset value
    const availability = availabilities.find(element => element.id === id);
    setSelectedAvailability(availability);
    setcurrentAvailability(availability.label);
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
            textLeft={T.t('categories.form.books-and-documents.Level')}
            textMiddle={selectedLevel.label}
            iconRight={icon}
            onPress={handleOpenLevel}
            open={openLevel}>
            <View style={styles.selector}>
              {levels.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectLevel(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedLevel.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedLevel.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedLevel.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedLevel.id === id ? 16 : 14,
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
            textLeft={T.t('categories.form.books-and-documents.State')}
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
            textLeft={T.t('categories.form.books-and-documents.Precision')}
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
            textLeft={T.t('categories.form.books-and-documents.Availability')}
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

export default BooksAndDocumentsFormScreen;
