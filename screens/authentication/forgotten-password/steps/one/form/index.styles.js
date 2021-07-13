import {StyleSheet} from 'react-native';
import {
  APP_GRAY,
  APP_PURPLE,
  APP_RED,
  WHITE,
} from '../../../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  title: {
    color: APP_GRAY,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Bold',
  },
  textError: {
    color: APP_RED,
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: APP_PURPLE,
    borderRadius: 12,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
