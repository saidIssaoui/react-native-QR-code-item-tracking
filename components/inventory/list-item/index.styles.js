import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY, APP_GRAY, APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 128,
    borderRadius: 12,
  },
  root: {
    flexDirection: 'row',
  },
  ribbon: {
    width: 12,
    height: 124,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  left: {
    width: 124,
    height: 124,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImage: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  QRcodeImage: {
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
  },
  rightInner: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
    color: APP_DARK_GRAY,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: APP_DARK_GRAY,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 4,
    color: APP_DARK_GRAY,
  },
  anchor: {
    position: 'absolute',
    right: 16,
    top: 4,
  },
  anchorText: {
    color: APP_PURPLE,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
