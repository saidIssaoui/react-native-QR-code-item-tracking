import {StyleSheet} from 'react-native';
import {APP_GRAY, BLACK, WHITE} from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    width: 142,
    height: 130,
    borderRadius: 32,
    shadowColor: BLACK + 'aa',
    elevation: 4,
  },
  content: {
    position: 'absolute',
    width: 86,
    justifyContent: 'space-around',
    height: 74,
    bottom: 0,
    left: 0,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#00580F',
    marginLeft: 12,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    color: WHITE,
    marginLeft: 12,
  },
});

export default styles;
