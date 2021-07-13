import {StyleSheet} from 'react-native';
import {APP_PURPLE, WHITE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  outer: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
  },
  right: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  middle: {
    flex: 4,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMiddle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  left: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textLeft: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  input: {
    alignSelf: 'stretch',
    marginLeft: 8,
  },
  text: {
    fontSize: 10,
  },
  sheet: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowColor: APP_PURPLE,
    backgroundColor: '#fff0',
    padding: 8,
    paddingTop: 6,
  },
  sheetInner: {
    backgroundColor: WHITE,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});

export default styles;
