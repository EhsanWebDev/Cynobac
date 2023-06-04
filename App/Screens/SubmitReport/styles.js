import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  autocompleteContainer: {
    flex: 1,
    width: '95%',
    // height: 300,
    // position: 'absolute',
    // bottom: 140,
    alignSelf: 'center',
    zIndex: 1,
  },
  mapViewStyle: {
    flex: 0.75,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    // flex: 1,
    // margin: 30,
    // marginHorizontal: 15,
  },
});
