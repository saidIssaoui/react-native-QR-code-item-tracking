import {StyleSheet} from 'react-native';
import {APP_PURPLE, APP_CANCEL_GRAY} from '../../../../constants';

const styles = StyleSheet.create({
  root: {
    marginTop: 64,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  selector: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectorItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default styles;
