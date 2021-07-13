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
    color: APP_DARK_GRAY,
    fontSize: 24,
    textAlign: 'center',
    width: '75%',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Bold',
  },
  middle: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    width: '75%',
    color: APP_DARK_GRAY,
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
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: WHITE,
  },
  buttonSimple: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  buttonSimpleText: {
    color: APP_PURPLE,
  },
  signUp: {
    flexDirection: 'row',
  },
  text: {
    color: APP_DARK_GRAY,
    marginRight: 4,
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Medium',
  },
  forgottenPassword: {
    color: APP_PURPLE,
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
