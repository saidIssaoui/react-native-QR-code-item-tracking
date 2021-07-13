import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import Background from '../../components/static/backgound';
import T from 'react-native-i18n';
import styles from './index.styles';
import UsersListItem from '../../components/users/list-item';
import Margin from '../../components/utils/margin';
import {APP_GRAY, APP_PURPLE, APP_RED, APP_DARK_GRAY} from '../../constants';
import Input from '../../components/inputs/text';
import {ChevronLeft} from 'react-native-iconly';
import CancelButton from '../../components/buttons/cancel';
import ValidateButton from '../../components/buttons/validate';
import axios from 'axios';
import ThreeDots from '../../components/static/icons/three-dots';
import ContentHolder from '../../components/holders/content-holder';
import {color} from 'react-native-reanimated';
import MultimediaDetails from './multimedia';
import ClothingDetails from './clothing';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const ItemDetails = ({navigation, route}) => {
  //console.log(idObject)
  const handlePressCancel = () => {
    navigation.pop();
  };

  const handleValidate = () => {
    updateItem();
  };

  const [users, setUsers] = useState();
  const [uri, seturi] = useState();
  const [color, setcolor] = useState();
  const [size, setsize] = useState();
  const [state, setstate] = useState();
  const [precision, setprecision] = useState();
  const [subcategorie, setsubcategorie] = useState();
  const [categorie, setcategorie] = useState();
  const [availibility, setavailibility] = useState();
  const [rate, setrate] = useState();
  var idObject = route.params.data;
  const [brand, setbrand] = useState();
  const [model, setmodel] = useState();
const [day, setday] = useState();
const [month, setmonth] = useState();
const [year, setyear] = useState();
  function updateItem() {
    axios
      .put('http://192.168.1.14:9000/api/objet', userObject)
      .then(function (response) {
        navigation.navigate('Item Created');
      })
      .catch(function (error) {
        // handle error
        alert('il y a pas un error lors de sauvgarde des donneés');
      });
  }
  async function getItem() {
    await axios
      .get(`http://192.168.1.14:9000/api/objet/${idObject}`)
      .then(res => {
        var userid = res.data.userId;
        setcategorie(res.data.categorie);
        var categoritest = res.data.categorie
        seturi(res.data.uri);
        
        setsubcategorie(res.data.subcategorie);
        if(categoritest == 'clothing'){
          
          setcolor(res.data.currentcolors);
          setsize(res.data.currentsizes);
          setstate(res.data.currentstates);
          setprecision(res.data.currentprecisions);
        }else if(categoritest == 'multimedia'){
          setprecision(res.data.currentprecisions);
          setavailibility(res.data.currentavailabilities)
          setrate(res.data.rating)
          setbrand(res.data.currentbrands);
          setmodel(res.data.currentmodels);
          setday(res.data.day)
          setmonth(res.data.month)
          setyear(res.data.year)
          
        }
        
        
        
        axios
          .get(`http://192.168.1.14:9000/api/utilisateur/${userid}`)
          .then(res => {
            //setUsers(res.data);
            setUsers(result => [res.data]);
          });
      })
      .catch(function (error) {
        // handle error
        alert('on peut pas access au base de donnée');
      });
  }
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressContextual = () => {
    alert('Contextual');
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      { categorie == 'clothing' ? (
        <ClothingDetails
          users={users}
          uri={uri}
          color={color}
          size={size}
          state={state}
          precision={precision}
          subcategorie={subcategorie}
        />
      ) : (
        <MultimediaDetails 
        users={users}
          uri={uri}
          availibility={availibility}
          rating={rate}
          brand={brand}
          model={model}
          precision={precision}
          subcategorie={subcategorie}
          day={day}
          month={month}
          year={year}
          />
          
      )}
    </>
  );
};

export default ItemDetails;
