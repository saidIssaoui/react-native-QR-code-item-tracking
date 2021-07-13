import {StyleSheet} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_RED,
  WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  top: {
    flex: 2.5,
  },
  middle: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  bottom: {
    flex: 2.5,
  },
  image: {},
  text: {
    textAlign: 'center',
    color: APP_DARK_GRAY,
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 24,
    color: APP_PURPLE,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  textHolder: {
    width: '70%',
  },
});
export default styles;
