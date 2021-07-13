import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_RED_MEMBER_RIBBON,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
  APP_RED,
  APP_CANCEL_GRAY,
} from '../../constants';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
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
    bottom: 16,
  },
  avatarContainer: {
    backgroundColor: APP_LIGHT_RED_MEMBER_RIBBON,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 84,
    height: 84,
  },
  username: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
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
    fontSize: 18,
    color: APP_DARK_GRAY,
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsHolder: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonLogoutContainer: {
    height: 64,
    width: '80%',
  },
  buttonLogout: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogoutText: {
    color: APP_RED_MEMBER_RIBBON,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  textVersion: {
    color: APP_CANCEL_GRAY,
  },
});

export default styles;
