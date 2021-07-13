import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import {Document} from 'react-native-iconly';
import styles from './index.styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {APP_PURPLE} from '../../../constants';

const icon = <Document set="light" color={APP_PURPLE} size={48} />;

const ImagePicker = ({children, handleImagePicked}) => {
  const handleLaunchImageLibrary = () => {
    launchImageLibrary({}, ({assets}) => {
      if (assets && assets[0] && assets[0].uri) {
        const {uri} = assets[0];
        handleImagePicked(uri);
      } else {
        alert('An error happened while picking the image.');
      }
    });
  };

  return (
    <TouchableOpacity onPress={handleLaunchImageLibrary}>
      {children}
    </TouchableOpacity>
  );
};

export default ImagePicker;

ImagePicker.defaultProps = {
  children: null,
  onPress: () => {},
};

ImagePicker.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
