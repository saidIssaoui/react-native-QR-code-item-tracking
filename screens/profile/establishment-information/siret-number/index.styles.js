import {StyleSheet} from 'react-native';
import {APP_GRAY, APP_PURPLE} from '../../../../constants';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  codeFieldRoot: {
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 40,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: APP_GRAY,
    fontSize: 20,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: APP_PURPLE,
    borderBottomWidth: 2,
  },
});
