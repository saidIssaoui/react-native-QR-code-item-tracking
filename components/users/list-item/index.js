import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import Checkbox from './checkbox';
import {
  APP_LIGHT_PURPLE_MEMBER_RIBBON,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
  APP_PURPLE_MEMBER_RIBBON,
  APP_RED_MEMBER_RIBBON,
} from '../../../constants';

const IMAGE_PLACEHOLDER = require('../../../assets/images/inventory-item-placeholder.jpg');

const UsersListItem = ({
  name = 'N/A',
  image,
  localImage = IMAGE_PLACEHOLDER,
  sexe,
  selectable = false,
  selected = false,
  checkboxColor = APP_PURPLE,
  disabled,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    disabled={disabled}>
    <ContentHolder rounded>
      <View style={styles.root}>
        <View
          style={{
            ...styles.ribbon,
            backgroundColor:
              sexe == 'male' ? APP_PURPLE_MEMBER_RIBBON : APP_RED_MEMBER_RIBBON,
          }}></View>
        <View
          style={{
            ...styles.left,
            backgroundColor:
              sexe == 'male'
                ? APP_LIGHT_PURPLE_MEMBER_RIBBON
                : APP_LIGHT_RED_MEMBER_RIBBON,
          }}>
          <View style={styles.leftImage}>
            {image && (
              <Image
                style={styles.leftImage}
                source={{
                  uri: image,
                }}
              />
            )}
            {localImage && !image && (
              <Image style={styles.leftImage} source={localImage} />
            )}
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.name}>{name}</Text>
          {selectable && (
            <Text style={styles.checkbox}>
              <Checkbox
                selected={selected}
                color={
                  sexe == 'male'
                    ? APP_PURPLE_MEMBER_RIBBON
                    : APP_RED_MEMBER_RIBBON
                }
              />
            </Text>
          )}
        </View>
      </View>
    </ContentHolder>
  </TouchableOpacity>
);

export default UsersListItem;

UsersListItem.defaultProps = {
  children: null,
  onPress: () => {},
};

UsersListItem.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
