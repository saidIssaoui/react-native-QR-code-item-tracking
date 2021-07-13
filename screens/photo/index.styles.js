import {StyleSheet} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_CANCEL_GRAY,
} from '../../constants';

const styles = StyleSheet.create({
  root: {
    marginTop: 72,
    flex: 1,
  },
  topBar: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: APP_PURPLE,
  },
  cameraContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: APP_DARK_GRAY,
  },
  pickerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: APP_CANCEL_GRAY,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
