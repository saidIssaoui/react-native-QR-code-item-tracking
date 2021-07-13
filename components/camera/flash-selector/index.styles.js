import {StyleSheet} from 'react-native';
import {APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: APP_PURPLE,
    margin: 8,
    padding: 8,
    borderRadius: 24,
  },
});

export default styles;
