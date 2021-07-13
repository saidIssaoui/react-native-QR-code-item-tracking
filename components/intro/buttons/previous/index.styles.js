import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY, APP_GRAY} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: APP_DARK_GRAY,
  },
});

export default styles;
