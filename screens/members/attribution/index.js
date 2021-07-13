import React, { useState,useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import ActionButton from '../../../components/buttons/action';
import T from 'react-native-i18n';
import styles from './index.styles';
import {APP_PURPLE} from '../../../constants';
import Background from '../../../components/static/backgound';
import Image from '../../../components/static/icons/image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CancelButton from '../../../components/buttons/cancel';
import axios from 'axios';
const icon = <Image isBlue={false} />;
const members = [
  {
    id: '1',
    label: 'Director',
  },
  {
    id: '2',
    label: 'Administrator',
  },
  {
    id: '3',
    label: 'Responsible',
  },
  {
    id: '4',
    label: 'Employee',
  },
];

const AttributionScreen = ({
  navigation,
  route
}) => {
  const data = route.params
  const randomID = route.params._id
    const userObject = {
        url: randomID,
       
      };
      const [qrcode, setqrcode] = useState();
    useEffect(()=>{
        qrcodescanner() 
        
    },[])
    async function qrcodescanner() {
       await axios
        .post('http://192.168.1.14:9000/scan', userObject)
        .then(function (response) {
            var info = response.data;
            setqrcode(info)
            alert("QR code generée avec succee \n vous pouvez continuer à terminer \n le processus d'ajout d'élément")
        })
        .catch(function (error) {
          // handle error
          alert('il y a pas un error lors de generation du QR code');
        });
    }
  const handlePressCancel = () => {
    navigation.pop();
  };
//   console.log(
//     randomID +
//       ' ' +
//       id +
//       ' ' +
//       uri +
//       ' ' +
//       categorieName +
//       ' ' +
//       correntLevel +
//       ' ' +
//       currentAvailability +
//       ' ' +
//       currentPrecision +
//       ' ' +
//       currentState,
//   );
  const handlePress = () => {
    navigation.navigate('Members List', {
      data , qrcode
      });
  };
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.cancelContainer}>
            <TouchableOpacity onPress={handlePressCancel}>
              <Text style={styles.cancelText}>
                {T.t('categories.form.Cancel')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Attribuer l'objet</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <FlatList
            contentContainerStyle={styles.gridContainer}
            columnWrapperStyle={styles.gridWrapper}
            data={members}
            numColumns={2}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <ActionButton
                icon={icon}
                text={item.label}
                textColor={APP_PURPLE}
                borderColor={APP_PURPLE}
                onPress={() => handlePress(item.id)}
              />
            )}
          />
        </View>
        <View style={styles.bottom}>
          <CancelButton onPress={handlePressCancel} />
        </View>
      </View>
      <Background />
    </>
  );
};

export default AttributionScreen;
