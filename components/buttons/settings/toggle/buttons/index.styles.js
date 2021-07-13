import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A08AFF',
    width: 38,
    height: 23,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 2,
  },
  innerCircle: {
    backgroundColor: WHITE,
    width: 20,
    height: 20,
    borderRadius: 14,
  },
});

export default styles;
