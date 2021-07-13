import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Image as Photo} from 'react-native-iconly';
import {WHITE} from '../../../constants';
import styles from './indes.styles';

const photo = <Photo set="light" color={WHITE} size={36} />;
const cross = '\u2715';

const ItemImagePlaceholder = ({uri, onPress, handleReset}) => {
  return (
    <>
      {uri && (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          {uri && <Image source={{uri, isStatic: true}} style={styles.image} />}
          {uri && (
            <TouchableOpacity style={styles.position} onPress={handleReset}>
              <View style={styles.reset}>
                <Text style={styles.text}>{cross}</Text>
              </View>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
      {!uri && <View style={styles.placeholder}>{photo}</View>}
    </>
  );
};

export default ItemImagePlaceholder;
