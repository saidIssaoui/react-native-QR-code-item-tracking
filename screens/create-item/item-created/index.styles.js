import {StyleSheet, Dimensions} from 'react-native';
import {APP_PURPLE} from '../../../constants';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    width: '40%',
    fontFamily: 'Poppins-Medium',
    fontSize: 19,
    color: APP_PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  middle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsHolder: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 56,
  },
  right: {
    flex: 6,
    height: 56,
    justifyContent: 'center',
  },
  actionLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: APP_PURPLE,
  },
});

export default styles;
