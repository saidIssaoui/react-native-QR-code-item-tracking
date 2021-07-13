import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY} from '../../../../constants';

const styles = StyleSheet.create({
  action: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  middle: {},
  right: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  actionLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: APP_DARK_GRAY,
  },
});

export default styles;
