import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ValidateButton from '../../../components/buttons/validate';
import ContentHolder from '../../../components/holders/content-holder';
import Background from '../../../components/static/backgound';
import Duplicate from '../../../components/static/icons/duplicate';
import PlusCircle from '../../../components/static/icons/plus-circle/small';
import Margin from '../../../components/utils/margin';
import styles from './index.styles';
import T from 'react-native-i18n';
import { CommonActions } from '@react-navigation/native';

const ItemCreatedScreen = ({navigation}) => {
  const handleValidate = () => {
    navigation.navigate('Home');
  };
  const handleDuplicate = () => {
    alert('Duplicate');
  };
  const handleAdd = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Create Item' },
        ],
      })
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            source={require('../../../assets/images/illustrations/intro-1.png')}
          />
          <Margin mb1 />
          <Text style={styles.description}>
            {T.translate('create-item.success.Added successfully')}
          </Text>
        </View>
        <View style={styles.middle}>
          <ContentHolder rounded>
            <View style={styles.actionsHolder}>
              <Margin mb1 />
              <TouchableOpacity style={styles.action} onPress={handleDuplicate}>
                <View style={styles.left}>
                  <Duplicate />
                </View>
                <Margin ml1 />
                <View style={styles.right}>
                  <Text style={styles.actionLabel}>
                    {T.translate('create-item.success.Duplicate')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action} onPress={handleAdd}>
                <View style={styles.left}>
                  <PlusCircle />
                </View>
                <Margin ml1 />
                <View style={styles.right}>
                  <Text style={styles.actionLabel}>
                    {T.translate('create-item.success.Add an object')}
                  </Text>
                </View>
              </TouchableOpacity>
              <Margin mb1 />
            </View>
          </ContentHolder>
        </View>
        <View style={styles.bottom}>
          <ValidateButton onPress={handleValidate} />
        </View>
      </View>
      <Background />
    </>
  );
};

export default ItemCreatedScreen;
