import {StyleSheet} from 'react-native';
import {APP_CANCEL_GRAY, APP_GRAY, APP_PURPLE,WHITE} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  top: {
    justifyContent: 'center',
    marginTop: 64,
  },
  topBar: {
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
  border: {
    backgroundColor: 'white',
    borderColor: '#2f85f0',
    borderWidth: 2,
    borderRadius: 40,
    height: 260,
    width: 270,
    alignSelf: 'center',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius:35
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 8,
    color: APP_PURPLE,
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
  footer: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:80
  },
  button: {
    backgroundColor: APP_PURPLE,
    height: 64,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  descriptionText:{
    color:APP_PURPLE,
    fontWeight:'bold'
  },
  buttonText: {
    color: WHITE,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  flash: {
    marginBottom: 10,
    
    marginVertical: 32,
    width: 250,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flash3: {
    marginBottom: 10,
    
    marginVertical: 32,
    width: 250,
    height: 100,
    backgroundColor: '#f4f3fc',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideFlash: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  insideFlash2: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  towrow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flash2: {
    marginBottom: 10,
    marginRight:5,
    width: 150,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
