import {StyleSheet} from 'react-native';
import {APP_PURPLE, WHITE} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    backgroundColor: APP_PURPLE,
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  container: {
    backgroundColor: WHITE,
    width: 230,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  horizontal: {
    backgroundColor: WHITE,
    width: 240,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    position: 'absolute',
  },
  vertical: {
    zIndex: 200,
    backgroundColor: WHITE,
    width: 200,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    backgroundColor: APP_PURPLE + 44,
    width: 180,
    height: 180,
    borderRadius: 24,
  },
});

export default styles;
