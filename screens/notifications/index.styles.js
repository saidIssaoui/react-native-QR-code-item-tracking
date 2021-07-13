import {StyleSheet, StatusBar} from 'react-native';
import {APP_LIGHT_RED_MEMBER_RIBBON, APP_PURPLE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  topBar: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
  },
  headingContainer: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  headingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: APP_PURPLE,
  },
  item: {
    marginVertical: 8,
    padding: 2,
  },
  header: {
    fontSize: 16,
    color: APP_PURPLE,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
    marginLeft: 16,
  },
  emptyContainer: {
    flex: 1,
  },
  emptyBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: APP_PURPLE,
    textAlign: 'center',
  },
});

export default styles;
