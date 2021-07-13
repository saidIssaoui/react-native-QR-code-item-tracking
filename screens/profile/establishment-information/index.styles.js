import {StyleSheet, StatusBar} from 'react-native';
import {
  APP_GRAY,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
  APP_RED,
  WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  topContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: APP_PURPLE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
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
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  header: {
    fontSize: 14,
    color: APP_GRAY,
    fontFamily: 'Poppins-Medium',
    marginVertical: 10,
    marginLeft: 16,
  },
  actionsHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueButton: {
    width: '90%',
    height: 64,
    backgroundColor: APP_PURPLE,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: WHITE,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});

export default styles;
