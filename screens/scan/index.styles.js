import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 5.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scan: {
    width: '35%',
    backgroundColor: '#784efb',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanText: {
    color: 'white',
  },
  text: {
    color: APP_DARK_GRAY,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  middle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 2.5,
  },
  
});

export default styles;
