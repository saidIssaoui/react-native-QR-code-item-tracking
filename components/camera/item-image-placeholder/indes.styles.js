import {StyleSheet} from 'react-native';
import {APP_GRAY, APP_PURPLE, WHITE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: '80%',
    borderRadius: 24,
  },
  image: {
    height: 200,
    marginTop: 5,
    borderRadius: 24,
  },
  position: {
    right: -4,
    top: -8,
    position: 'absolute',
  },
  reset: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: 24,
    width: 24,
    zIndex: 10,
    elevation: 10,
    borderRadius: 16,
  },
  text: {
    color: APP_GRAY,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  placeholder: {
    height: 220,
    width: '80%',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: APP_PURPLE + '22',
  },
});

export default styles;
