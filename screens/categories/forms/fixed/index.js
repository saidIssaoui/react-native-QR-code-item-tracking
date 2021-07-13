import React,{useEffect,useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import styles from './index.styles';
import Background from '../../../../components/static/backgound';
import Margin from '../../../../components/utils/margin';
import ValidateButton from '../../../../components/buttons/validate';
import LightTriangle from '../../../../components/static/icons/light-triangle';
import Selector from '../../../../components/inputs/selector';
import Chevron from '../../../../components/inputs/selector/chevron';
import House from '../../../../components/static/icons/house';
import {APP_PURPLE, BLACK} from '../../../../constants';

import {situations, buildings, units} from './constants'; // # TODO change this to use context
import VerificationCode from '../../../authentication/forgotten-password/steps/three/verification-code';
import RoomNumber from './room-number';

const icon = <Chevron />;

const FixedFormScreen = ({
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
  const ribbonColor = '#F8BBD0'
  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      currentsituations,
      currentbuildings,
      currentunits,
      ribbonColor
    });
  };
  //#region Situation
  const [openSituation, setOpenSituation] = useState(false);
  const [currentsituations, setcurrentsituations] = useState();
  const [selectedSituation, setSelectedSituation] = useState(true);
  const handleOpenSituation = () => {
    setOpenSituation(!openSituation);
  };
  const handleSelectSituation = id => {
    // # TODO ask about how to reset value
    const situation = situations.find(element => element.id === id);
    setSelectedSituation(situation);
    setcurrentsituations(situation.label)
  };
  //#endregion

  //#region Building
  const [openBuilding, setOpenBuilding] = useState(false);
  const [currentbuildings, setcurrentbuildings] = useState();
  const [selectedBuilding, setSelectedBuilding] = useState(true);
  const handleOpenBuilding = () => {
    setOpenBuilding(!openBuilding);
  };
  const handleSelectBuilding = id => {
    // # TODO ask about how to reset value
    const building = buildings.find(element => element.id === id);
    setSelectedBuilding(building);
    setcurrentbuildings(building.label)
  };
  //#endregion

  //#region Unit
  const [openUnit, setOpenUnit] = useState(false);
  const [currentunits, setcurrentunits] = useState();
  const [selectedUnit, setSelectedUnit] = useState(true);
  const handleOpenUnit = () => {
    setOpenUnit(!openUnit);
  };
  const handleSelectUnit = id => {
    // # TODO ask about how to reset value
    const unit = units.find(element => element.id === id);
    setSelectedUnit(unit);
    setcurrentunits(unit.label)
  };
  //#endregion

  const handleCompleteNumber = code => {
    alert(code);
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
            textLeft={T.t('categories.form.fixed.Situation')}
            textMiddle={selectedSituation.label}
            iconRight={icon}
            onPress={handleOpenSituation}
            open={openSituation}>
            <View style={styles.selector}>
              {situations.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectSituation(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedSituation.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedSituation.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedSituation.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedSituation.id === id ? 16 : 14,
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
            textLeft={T.t('categories.form.fixed.Building')}
            textMiddle={selectedBuilding.label}
            iconRight={icon}
            onPress={handleOpenBuilding}
            open={openBuilding}>
            <View style={styles.selector}>
              {buildings.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectBuilding(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedBuilding.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedBuilding.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedBuilding.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedBuilding.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('categories.form.fixed.Unit')}
            </Text>
          </View>
          <Margin mb1 />
          <Selector
            iconLeft={<House circle />}
            textMiddle={selectedUnit.label}
            iconRight={icon}
            onPress={handleOpenUnit}
            open={openUnit}>
            <View style={styles.selector}>
              {units.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectUnit(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedUnit.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedUnit.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedUnit.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedUnit.id === id ? 16 : 14,
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
          <Margin mb3 />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {T.t('categories.form.fixed.Room #')}
            </Text>
          </View>
          <Margin mt1 />
          <View style={styles.roomContainer}>
            <House />
            <Margin ml2 />
            <RoomNumber handleCompleteNumber={handleCompleteNumber} />
          </View>
          <Margin mb1 />
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

export default FixedFormScreen;
