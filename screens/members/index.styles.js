import {StyleSheet} from 'react-native';
import {
  APP_CANCEL_GRAY,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
  APP_RED,
} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleContainer: {
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
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: APP_RED,
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
    marginBottom: 24,
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
