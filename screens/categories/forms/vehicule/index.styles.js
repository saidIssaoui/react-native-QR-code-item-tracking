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
  kilometersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kilometers: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: APP_CANCEL_GRAY,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginLeft: 38,
  },
  kilometersHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: APP_PURPLE,
  },
  grayCardHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: APP_PURPLE,
  },
  cameraContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
