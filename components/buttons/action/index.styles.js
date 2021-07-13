import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 136,
    height: 136,
    borderRadius: 12,
  },
  outer: {
    width: 134,
    height: 134,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
