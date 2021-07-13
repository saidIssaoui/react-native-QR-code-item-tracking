import {StyleSheet} from 'react-native';
import {APP_CANCEL_GRAY, APP_GRAY, APP_PURPLE} from '../../../../constants';

const styles = StyleSheet.create({
  container: {},

  top: {
    justifyContent: 'center',
    marginTop: 64,
  },
  cancelContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  cancelText: {
    color: APP_CANCEL_GRAY,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  titleContainer: {
    width: '80%',
    alignSelf: 'center',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 8,
    color: APP_PURPLE,
  },
  searchContainer: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  filterContainer: {
    width: '80%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  filterText: {
    color: APP_GRAY,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  contentContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  itemContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginVertical: 8,
  },
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 32,
  },
});

export default styles;
