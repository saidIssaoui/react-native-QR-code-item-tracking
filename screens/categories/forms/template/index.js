import React ,{useEffect,useState}from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import styles from './index.styles';
import Background from '../../../../components/static/backgound';
import Margin from '../../../../components/utils/margin';
import ValidateButton from '../../../../components/buttons/validate';
import LightTriangle from '../../../../components/static/icons/light-triangle';
import Selector from '../../../../components/inputs/selector';

const ClothingFormScreen = ({route: {
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
  const ribbonColor = '#FFEB3B'
  const handleValidate = () => {
    navigation.navigate('Attribution',{
      _id,
      subcategorie,
      uri,
      categorie,
      currentCountry,
      ribbonColor
    });
  };

  const allCountries = [
    {
      id: '1',
      label: 'France',
    },
    {
      id: '2',
      label: 'Germany',
    },
    {
      id: '3',
      label: 'Italy',
    },
    {
      id: '4',
      label: 'Greece',
    },
    {
      id: '5',
      label: 'Portugal',
    },
    {
      id: '6',
      label: 'Spain',
    },
  ];

  const [open, setOpen] = useState(true);
  const [currentCountry, setcurrentCountry] = useState();
  const [selectedCountry, setSelectedCountry] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleSelect = id => {
    const country = allCountries.find(element => element.id === id);
    setSelectedCountry(country);
    setcurrentCountry(country.label)
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
            textLeft="Countries"
            textMiddle={selectedCountry.label}
            iconRight={icon}
            onPress={handleOpen}
            open={open}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              {countries.map(({id, label}) => (
                <TouchableOpacity
                  onPress={() => handleSelect(id)}
                  key={id}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  disabled={selectedCountry.id === id}>
                  <Margin mb1 />
                  <Text
                    style={{
                      color: selectedCountry.id === id ? APP_PURPLE : BLACK,
                      fontWeight: selectedCountry.id === id ? '700' : 'normal',
                    }}>
                    {label}
                  </Text>
                  <Margin mb1 />
                </TouchableOpacity>
              ))}
            </View>
          </Selector>
        </View>
        <Margin mb4 />
        <View style={styles.footer}>
          <ValidateButton onPress={handleValidate} />
        </View>
      </ScrollView>
      <Background />
    </>
  );
};

export default ClothingFormScreen;
