import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderRadius: 8,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  middle: {
    flex: 7,
    height: 42,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  secondary: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  input: {
    alignSelf: 'stretch',
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    fontSize: 10,
  },
});

export default styles;
