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
import {APP_PURPLE, BLACK} from '../../../../constants';
import WheelNumberPicker from '../../../../components/inputs/wheel/picker';
import {brands, models, availabilities, precisions} from './constants'; // # TODO change this to use context
import Rating from '../../../../components/inputs/rating';
import {processDays, processMonths, processYears} from '../../../categories/forms/utils';
const icon = <Chevron />;
const days = processDays();
const months = processMonths();
const years = processYears();

const MultimediaFormScreen = ({
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
const ribbonColor = '#FF5722'
  const handleValidate = () => {
    navigation.navigate('Attribution', {
      _id,
      subcategorie,
      uri,
      categorie,
      currentbrands,
      currentmodels,
      currentavailabilities,
      currentprecisions,
      rating,
      day,
      month,
      year,
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

  //#region Precision
  const [openPrecision, setOpenPrecision] = useState(false);
  const [currentprecisions, setcurrentprecisions] = useState();
  const [selectedPrecision, setSelectedPrecision] = useState(true);
  const handleOpenPrecision = () => {
    setOpenPrecision(!openPrecision);
  };
  const handleSelectPrecision = id => {
    // # TODO ask about how to reset value
    const precision = precisions.find(element => element.id === id);
    setSelectedPrecision(precision);
    setcurrentprecisions(precision.label)
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
  };
  const [smallWidth, setSmallWidth] = useState(0);
  const [largeWidth, setLargeWidth] = useState(0);
  useEffect(() => {
    setSmallWidth(32);
    setLargeWidth(64);
  }, []);
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
            textLeft={T.t('categories.form.multimedia.Brand')}
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
            textLeft={T.t('categories.form.multimedia.Model')}
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
            textLeft={T.t('categories.form.multimedia.Precision')}
            textMiddle={selectedPrecision.label}
            iconRight={icon}
            onPress={handleOpenPrecision}
            open={openPrecision}>
            <View style={styles.selector}>
              {precisions.map(({id, label, color}) => (
                <TouchableOpacity
                  onPress={() => handleSelectPrecision(id)}
                  key={id}
                  style={styles.selectorItem}
                  disabled={selectedPrecision.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color,
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
            text={T.t('categories.form.multimedia.Value')}
            rating={rating}
            handleSetRating={handleSetRating}
          />
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
        
          <Selector
            textLeft={T.t('categories.form.multimedia.Availability')}
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

export default MultimediaFormScreen;
