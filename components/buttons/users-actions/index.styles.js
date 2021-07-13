import {StyleSheet} from 'react-native';
import {APP_GRAY} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    width: '80%',
    position: 'absolute',
    alignSelf: 'center',
    left: '10%',
    bottom: -4,
    height: 82,
  },
  container: {
    height: 82,
    flexDirection: 'row',
  },
  left: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    flex: 2,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  text: {
    color: APP_GRAY,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});

export default styles;
