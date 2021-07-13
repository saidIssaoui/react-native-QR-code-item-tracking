import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    width: 142,
    height: 130,
    borderRadius: 32,
    elevation: 4,
  },
  iconHolder: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 86,
    justifyContent: 'space-around',
    height: 74,
    bottom: 0,
    left: 0,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#00580F',
    marginLeft: 12,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: WHITE,
    marginLeft: 12,
  },
});

export default styles;
