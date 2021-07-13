import {StyleSheet} from 'react-native';
import {APP_DARK_GRAY, APP_GRAY, APP_PURPLE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 86,
    borderRadius: 12,
  },
  root: {
    flexDirection: 'row',
  },
  ribbon: {
    width: 8,
    height: 86,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  left: {
    width: 78,
    height: 86,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  leftImage: {
    width: 56,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  right: {
    flex: 1,
    display: 'flex',
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 24,
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 24,
    color: APP_PURPLE,
    alignSelf: 'center',
  },
  checkbox: {
    fontSize: 16,
    fontWeight: '700',
    color: APP_PURPLE,
    marginLeft: 'auto',
    alignSelf: 'center',
  },
});

export default styles;
