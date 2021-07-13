import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY, APP_GRAY, APP_PURPLE, WHITE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 64,
  },
  title: {
    color: APP_PURPLE,
    fontSize: 24,
    textAlign: 'center',
    width: '75%',
    fontFamily: 'Poppins-Bold',
  },
  middle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    width: '75%',
    color: APP_DARK_GRAY,
    fontFamily: 'Poppins-Regular',
  },
  bottom: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: APP_PURPLE,
    height: 64,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: WHITE,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  buttonSimple: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  buttonSimpleText: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Regular',
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  text: {
    color: APP_DARK_GRAY,
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: APP_PURPLE,
    textDecorationColor: APP_PURPLE,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
