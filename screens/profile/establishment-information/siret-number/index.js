import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {APP_GRAY, BLACK} from '../../../../constants';
import styles from './index.styles';

const SiretNumber = ({handleCompleteCode, cells = 4}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: cells});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    if (typeof value === 'string' && value.length === cells) {
      handleCompleteCode(value);
    }
  }, [value]);
  return (
    <SafeAreaView>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cells}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text
              style={{...styles.cellText, color: isFocused ? BLACK : APP_GRAY}}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SiretNumber;
