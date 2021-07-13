import {StyleSheet} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_CANCEL_GRAY,
} from '../../constants';

const styles = StyleSheet.create({
  root: {
    marginTop: 64,
  },
  cancelContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  cancelText: {
    color: APP_CANCEL_GRAY,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  titleContainer: {
    width: '80%',
    alignSelf: 'center',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 8,
    color: APP_PURPLE,
  },
  searchContainer: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 24,
  },
  grid: {
    width: '78%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 12,
  },
  footer: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default styles;
