import {StyleSheet, StatusBar} from 'react-native';
import {
  APP_GREEN,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
} from '../../constants';

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
  userContainer: {
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: APP_LIGHT_RED_MEMBER_RIBBON,
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  username: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  itemsInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: APP_GREEN,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
    marginLeft: 16,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: APP_GREEN,
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
  smallText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: APP_PURPLE,
    textAlign: 'center',
    bottom: 64,
  },
  addButtonContainer: {
    width: 64,
    height: 64,
    position: 'absolute',
    bottom: 64,
    right: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonShadow: {
    backgroundColor: APP_PURPLE,
    borderRadius: 32,
    opacity: 0.1,
    position: 'absolute',
    width: 64,
    height: 64,
    top: 2,
  },
});

export default styles;
