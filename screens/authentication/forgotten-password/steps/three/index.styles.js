import {StyleSheet} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_YELLOW,
  WHITE,
} from '../../../../../constants';

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
  descriptionHolder: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    flexDirection: 'row',
    color: APP_DARK_GRAY,
    fontFamily: 'Poppins-Regular',
  },
  middle: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    color: APP_DARK_GRAY,
    marginRight: 4,
  },
  strong: {
    color: APP_PURPLE,
    fontWeight: 'bold',
    marginTop: 4,
  },
  resend: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendButton: {
    color: APP_YELLOW,
    padding: 6,
  },
  timer: {
    color: APP_DARK_GRAY,
  },
});

export default styles;
