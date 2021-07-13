import {StyleSheet} from 'react-native';
import {APP_CANCEL_GRAY, APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 3,
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 8,
    color: APP_PURPLE,
  },
  middle: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  gridWrapper: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 48,
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
  },
});

export default styles;
