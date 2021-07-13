import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import T from 'react-native-i18n';
import Icon from './qr-code-icon';
import styles from './index.styles';
import {APP_GRAY, APP_PURPLE, BLACK} from '../../../constants';

const IMAGE_PLACEHOLDER = require('../../../assets/images/inventory-item-placeholder.jpg');

const InventoryListItem = ({
  name = 'Unnamed',
  categoryName = 'N/A',
  personName = 'N/A',
  image,
  QRImage,
  localImage = IMAGE_PLACEHOLDER,
  ribbonColor = APP_GRAY,
  anchorText,
  anchorTextColor = APP_PURPLE,
  disabled,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    disabled={disabled}>
    <ContentHolder rounded>
      <View style={styles.root}>
        <View style={{...styles.ribbon, backgroundColor: ribbonColor}}></View>
        <View style={styles.left}>
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
          <View style={styles.rightInner}>
            <View style={styles.label}>
            <Image style={styles.QRcodeImage} source={QRImage} />
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.title}>{T.t('Category:')}</Text>
              <Text style={styles.subtitle}>{categoryName}</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.title}>{T.t('Assigned to:')}</Text>
              <Text style={styles.subtitle}>{personName}</Text>
            </View>
          </View>
        </View>
      </View>
      {anchorText && (
        <View style={{...styles.anchor, color: anchorTextColor}}>
          <Text style={styles.anchorText}>{anchorText}</Text>
        </View>
      )}
    </ContentHolder>
  </TouchableOpacity>
);

export default InventoryListItem;

InventoryListItem.defaultProps = {
  children: null,
  onPress: () => {},
};

InventoryListItem.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
