import {StyleSheet} from 'react-native';
import {APP_CANCEL_GRAY, APP_GRAY, APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    width: '60%',
    height: 82,
  },
  container: {
    height: 82,
    flexDirection: 'row',
  },
  spacer: {
    flex: 1,
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: APP_CANCEL_GRAY,
    alignSelf: 'center',
    margin: 12,
  },
  left: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  textMargin: {
    marginVertical: 1,
  },
  textRight: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textLeft: {
    color: APP_CANCEL_GRAY,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default styles;
