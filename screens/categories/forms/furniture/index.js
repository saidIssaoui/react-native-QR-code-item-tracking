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
import {states, buildings, locations} from './constants'; // # TODO change this to use context
import House from '../../../../components/static/icons/house';
import RoomNumber from '../fixed/room-number';
import WheelNumberPicker from '../../../../components/inputs/wheel/picker';
import {processDays, processMonths, processYears} from '../utils';

const icon = <Chevron />;
const days = processDays();
const months = processMonths();
const years = processYears();

const FurnitureFormScreen = ({
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
  const [smallWidth, setSmallWidth] = useState(0);
  const [largeWidth, setLargeWidth] = useState(0);
  useEffect(() => {
    setSmallWidth(32);
    setLargeWidth(64);
  }, []);
  const handlePressCancel = () => {
    navigation.pop();
  };
const ribbonColor ='#795548'
  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      currentstates,
      currentbuildings,
      currentlocations,
      ribbonColor,
      day,
      month,
      year
    });
  };

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

  //#region Sizes
  const [openLocation, setOpenLocation] = useState(false);
  const [currentlocations, setcurrentlocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState(true);
  const handleOpenLocation = () => {
    setOpenLocation(!openLocation);
  };
  const handleSelectLocation = id => {
    // # TODO ask about how to reset value
    const location = locations.find(element => element.id === id);
    setSelectedLocation(location);
    setcurrentlocations(location.label)
  };
  //#endregion

  const handleCompleteNumber = code => {
    alert(code);
  };

  const [day, setDay] = useState('');
  const handleDayPicked = d => {
    if(d<10)
    setDay('0'+(d+1));
    else
    setDay(''+(d+1));
  };
  const [month, setMonth] = useState('');
  const handleMonthPicked = m => {
    if(m<10)
    setMonth('0'+(m+1));
    else
    setMonth(''+(m+1));
  };
  const [year, setYear] = useState('');
  const handleYearPicked = y => {
    setYear(2021-y);
  }
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
            textLeft={T.t('categories.form.furniture.State')}
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
            textLeft={T.t('categories.form.furniture.Building')}
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
          <Selector
            textLeft={T.t('categories.form.furniture.Location')}
            textMiddle={selectedLocation.label}
            iconRight={icon}
            onPress={handleOpenLocation}
            open={openLocation}>
            <View style={styles.selector}>
              {locations.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelectLocation(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedLocation.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedLocation.id === id ? APP_PURPLE : BLACK,
                      fontFamily:
                        selectedLocation.id === id
                          ? 'Poppins-Medium'
                          : 'Poppins-Regular',
                      fontSize: selectedLocation.id === id ? 16 : 14,
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
              {T.t('categories.form.furniture.Room #')}
            </Text>
          </View>
          <Margin mt1 />
          <View style={styles.roomContainer}>
            <House />
            <Margin ml2 />
            <RoomNumber handleCompleteNumber={handleCompleteNumber} />
          </View>
          <Margin mb3 />
          <View style={styles.headerContainer}>
            <Text style={styles.dateHeader}>
              {T.t('categories.form.furniture.Date of commissioning')}
            </Text>
          </View>
          <Margin mt1 />
          <View style={styles.dateContainer}>
            <WheelNumberPicker
              width={smallWidth}
              height={120}
              onItemSelected={handleDayPicked}
              items={days}
            />
            <WheelNumberPicker
              width={smallWidth}
              height={120}
              onItemSelected={handleMonthPicked}
              items={months}
            />
            <WheelNumberPicker
              width={largeWidth}
              height={120}
              onItemSelected={handleYearPicked}
              items={years}
            />
          </View>
        </View>
        <Margin mb4 />
        <View style={styles.footer}>
          <ValidateButton onPress={handleValidate} />
        </View>
        <Margin mb5 />
      </ScrollView>
      <Background />
    </>
  );
};

export default FurnitureFormScreen;
