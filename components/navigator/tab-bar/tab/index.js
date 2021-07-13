import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import styles from './index.styles';

const Tab = forwardRef(({icon, flex = 3, disabled, onPress}, ref) => {
  const [location, setLocation] = useState('down');
  const translate = useState(new Animated.Value(0))[0];
  const moveUp = () => {
    Animated.timing(translate, {
      toValue: -6,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setLocation('up');
    });
  };
  const moveDown = () => {
    Animated.timing(translate, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setLocation('down');
    });
  };
  useImperativeHandle(ref, () => ({
    move() {
      if (location === 'up') {
        moveDown();
      }
      if (location === 'down') {
        moveUp();
      }
    },
  }));
  return (
    <TouchableOpacity
      style={{...styles.container, flex}}
      disabled={disabled}
      onPress={onPress}>
      <Animated.View
        style={[
          {
            transform: [{translateY: translate}],
          },
        ]}>
        {icon}
      </Animated.View>
    </TouchableOpacity>
  );
});

export default Tab;
