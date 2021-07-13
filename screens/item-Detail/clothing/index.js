import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import Background from '../../../components/static/backgound';
import T from 'react-native-i18n';
import styles from './index.styles';
import UsersListItem from '../../../components/users/list-item';
import Margin from '../../../components/utils/margin';
import {APP_GRAY, APP_PURPLE, APP_RED, APP_DARK_GRAY} from '../../../constants';
import Input from '../../../components/inputs/text';
import {ChevronLeft} from 'react-native-iconly';
import CancelButton from '../../../components/buttons/cancel';
import ValidateButton from '../../../components/buttons/validate';
import axios from 'axios';
import ThreeDots from '../../../components/static/icons/three-dots';
import ContentHolder from '../../../components/holders/content-holder';
import {color} from 'react-native-reanimated';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const ClothingDetails = ({users,
  navigation,
  uri,
  color,
  size,
  state,
  precision,
  subcategorie,
}) => {
  //console.log(idObject)
  const handlePressCancel = () => {
    navigation.pop();
  };

  const handleValidate = () => {
    updateItem();
  };

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

  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressContextual = () => {
    alert('Contextual');
  };

  //console.log(object)
  const header = () => (
    <View style={styles.top}>
      <View style={styles.cancelContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
          <TouchableOpacity onPress={handlePressContextual}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{subcategorie}</Text>
      </View>
      <Margin mb1 />
      <View style={styles.border}>
        <Image style={styles.introImageStyle} source={{uri: uri}} />
      </View>
      <Margin mb1 />

      <Margin mb1 />
    </View>
  );

  const footer = () => (
    <View style={styles.footer}>
      <View style={styles.flash}>
        <View style={styles.insideFlash}>
          <Text style={styles.descriptionText}>Couleur</Text>
          <TextInput>
            <Text style={{color: APP_GRAY}}>{color}</Text>
          </TextInput>
        </View>
      </View>
      <View style={styles.towrow}>
        <View style={styles.flash2}>
          <View style={styles.insideFlash}>
            <Text style={styles.descriptionText}>Taille</Text>
            <TextInput>
              <Text style={{color: APP_GRAY}}>{size}</Text>
            </TextInput>
          </View>
        </View>
        <View style={styles.flash2}>
          <View style={styles.insideFlash}>
            <Text style={styles.descriptionText}>Etat</Text>
            <TextInput>
              <Text style={{color: APP_GRAY}}>{state}</Text>
            </TextInput>
          </View>
        </View>
      </View>
      <View style={styles.flash}>
        <View style={styles.insideFlash}>
          <Text style={styles.descriptionText}>Precision</Text>
          <TextInput>
            <Text style={{color: APP_GRAY}}>{precision}</Text>
          </TextInput>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleValidate}>
          <Text style={styles.buttonText}>Ajuster</Text>
        </TouchableOpacity>

        <Margin mb3 />
      </View>
    </View>
  );
  return (
    <>
      <View style={styles.middle}>
        <FlatList
          data={users}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <UsersListItem
                key={item._id}
                name={item.nom}
                sexe={item.genre}
                name={item.nom + ' ' + item.prenom}
                localImage={{uri: item.image}}
                ribbonColor={item.ribbonColor}
              />
            </View>
          )}
          contentContainerStyle={styles.contentContainerStyle}
          ListHeaderComponent={header()}
          ListFooterComponent={footer()}
        />
      </View>

      <Margin mb4 />
      <Background />
    </>
  );
};

export default ClothingDetails;
