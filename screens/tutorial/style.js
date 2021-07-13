import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 60,
    height: 50,
    backgroundColor: 'rgba(120,78,251,255)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {},
  introTextStyle: {
    fontSize: 18,
    color: '#8b8b8b',
    textAlign: 'center',
    paddingVertical: 0,
    marginBottom: 80,
  },
  introTitleStyle: {
    fontSize: 25,
    color: '#784efb',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default styles;
