import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import {APP_PURPLE} from '../../../constants';

const Selector = ({
  open,
  disabled,
  iconLeft,
  textLeft,
  textLeftColor = APP_PURPLE,
  textMiddle,
  iconRight,
  onPress,
  children,
}) => (
  <View
    style={{
      ...styles.container,
      elevation: open ? 3 : 0,
      shadowColor: open ? APP_PURPLE : null,
    }}>
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <ContentHolder rounded>
        <View style={styles.outer}>
          <View style={styles.inner}>
            {iconLeft && (
              <View onPress={onPress} style={styles.left}>
                {iconLeft}
              </View>
            )}
            {textLeft && (
              <View style={styles.left}>
                <Text style={{...styles.textLeft, color: textLeftColor}}>
                  {textLeft}
                </Text>
              </View>
            )}
            {textMiddle && (
              <View style={styles.middle}>
                <Text style={styles.textMiddle}>{textMiddle}</Text>
              </View>
            )}
            {iconRight && (
              <View onPress={onPress} style={styles.right}>
                {iconRight}
              </View>
            )}
          </View>
        </View>
      </ContentHolder>
    </TouchableOpacity>
    {open && (
      <View style={styles.sheet}>
        <View style={styles.sheetInner}>{children}</View>
      </View>
    )}
  </View>
);

export default Selector;

Selector.defaultProps = {
  children: null,
  onPress: () => {},
};

Selector.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
