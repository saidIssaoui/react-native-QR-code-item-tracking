import {StyleSheet} from 'react-native';
import {APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTop: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 12,
  },
  topMiddle: {
    flex: 0.25,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 12,
  },
  welcome: {
    color: APP_PURPLE,
    fontWeight: 'bold',
    fontSize: 24,
  },
  topBottom: {
    flex: 0.25,
    width: '100%',
    justifyContent: 'flex-start',
  },
  name: {
    color: APP_PURPLE,
    fontSize: 20,
    marginLeft: 32,
  },
  middle: {
    flex: 0.1,
    justifyContent: 'center',
  },
  text: {
    color: APP_PURPLE,
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 48,
  },
  bottom: {
    flex: 0.55,
    alignItems: 'center',
  },
});

export default styles;
