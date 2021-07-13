import {StyleSheet} from 'react-native';
import {APP_PURPLE, BLACK, WHITE} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '80%',
    height: 62,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: WHITE,
    shadowColor: BLACK,
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: {width: 8, height: 8},
    backgroundColor: WHITE,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 48,
  },
  left: {
    flexDirection: 'row',
  },
  center: {
    width: 20,
  },
  right: {
    flexDirection: 'row',
  },
  text: {
    color: APP_PURPLE,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
