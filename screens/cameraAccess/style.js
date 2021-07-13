import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  deny: {
    width: '35%',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graint: {
    width: '35%',
    backgroundColor: '#784efb',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImageStyle: {
    width: 150,
    height: 150,
  },
  introTitleStyle: {
    fontSize: 18,
    color: '#6b6b6b',
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
  },
  denyText: {
    color: '#a7a7a7',
  },
  graintText: {
    color: 'white',
  },
  border: {
    backgroundColor: 'white',
    borderColor: '#2f85f0',
    borderWidth: 2,
    borderRadius: 40,
    height: 350,
    width: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default styles;
