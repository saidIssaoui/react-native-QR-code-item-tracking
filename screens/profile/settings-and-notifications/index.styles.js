import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import {
  APP_DARK_GRAY,
  APP_GRAY,
  APP_RED_MEMBER_RIBBON,
  APP_LIGHT_RED_MEMBER_RIBBON,
  APP_PURPLE,
  APP_RED,
  APP_CANCEL_GRAY,
} from '../../../constants';
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
  textVersion: {
    color: APP_CANCEL_GRAY,
  },
});

export default styles;
