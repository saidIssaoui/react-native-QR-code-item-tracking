import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import Star from './star';
import ShadowView from 'react-native-simple-shadow-view';

const Rating = ({text, rating, handleSetRating, disabled, onPress}) => (
  <ShadowView onPress={onPress} style={styles.root}>
    <View style={styles.container}>
      {text && (
        <View>
          <View style={styles.left}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={styles.center} />
        </View>
      )}
      <View style={styles.right}>
        <Star
          selected={rating >= 1}
          onPress={() => handleSetRating(1)}
          disabled={disabled}
        />
        <Star
          selected={rating >= 2}
          onPress={() => handleSetRating(2)}
          disabled={disabled}
        />
        <Star
          selected={rating >= 3}
          onPress={() => handleSetRating(3)}
          disabled={disabled}
        />
        <Star
          selected={rating >= 4}
          onPress={() => handleSetRating(4)}
          disabled={disabled}
        />
        <Star
          selected={rating >= 5}
          onPress={() => handleSetRating(5)}
          disabled={disabled}
        />
      </View>
    </View>
  </ShadowView>
);

export default Rating;

Rating.defaultProps = {
  children: null,
  onPress: () => {},
};

Rating.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
