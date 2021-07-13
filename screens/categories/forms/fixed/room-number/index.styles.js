import {StyleSheet} from 'react-native';
import {APP_GRAY, APP_PURPLE} from '../../../../../constants';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  codeFieldRoot: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 28,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: APP_GRAY,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  focusCell: {
    borderBottomColor: APP_PURPLE,
    borderBottomWidth: 2,
  },
});
