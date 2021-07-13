import {StyleSheet} from 'react-native';
import {APP_PURPLE} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: APP_PURPLE,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default styles;
