import React from 'react';
import {View, Text} from 'react-native';
import styles from './index.style';
import {WheelPicker} from 'react-native-wheel-picker-simple';
import {APP_DARK_GRAY, APP_PURPLE} from '../../../../constants';

// TODO: Investigate this library for ANR
const WheelNumberPicker = ({
  width = 50,
  height = 120,
  items = ['Item 1', 'Item 2', 'Item 3'],
  selectedItem = 1,
  itemsModified = [],
  onAddItem = () => {},
  onItemSelected = () => {},
}) => {
  return (
    <View style={styles.container}>
      <WheelPicker
        itemStyle={{
          backgroundColor: 'red',
          color: 'blue',
          fontSize: 17,
          fontFamily: 'Poppins-Regular',
        }}
        selectedItemTextFontFamily={'Poppins-Regular'}
        itemTextFontFamily={'Poppins-Regular'}
        selectedItemTextSize={17}
        itemTextSize={17}
        selectedItemTextColor={APP_DARK_GRAY}
        indicatorColor={APP_PURPLE}
        selectedItem={selectedItem}
        data={items}
        onItemSelected={onItemSelected}
        width={width}
        height={height}
      />
    </View>
  );
};

export default WheelNumberPicker;
