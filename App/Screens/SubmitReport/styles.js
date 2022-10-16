import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: Colors.lightGray,
  },
  autocompleteContainer: {
    flex: 1,
    width: '95%',
    // height: 300,
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    zIndex: 1,
  },
  mapViewStyle: {
    flex: 1,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    // margin: 30
    marginVertical: 15, 
    marginHorizontal: 15,
  },
});
