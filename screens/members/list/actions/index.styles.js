import {StatusBar, StyleSheet} from 'react-native';
import {
  APP_CANCEL_GRAY,
  APP_GRAY,
  APP_PURPLE,
  APP_RED,
} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  topBar: {
    marginTop: 32,
    marginHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
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
    color: APP_RED,
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
  selectText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: APP_RED,
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
  filler: {
    marginVertical: 64,
  },
});

export default styles;
