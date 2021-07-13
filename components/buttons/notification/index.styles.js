import {StyleSheet} from 'react-native';
import {APP_GRAY, APP_RED} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  dot: {
    backgroundColor: APP_RED,
    width: 10,
    height: 10,
    borderRadius: 5,
    right: 10,
    top: 4,
    position: 'absolute',
  },
});

export default styles;
