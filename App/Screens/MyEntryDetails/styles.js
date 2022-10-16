import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 10,
  },
  headerViewContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    marginVertical: 10,
    padding: 10,
  },
  itemImage: {
    width: 15,
    height: 12,
  },
  itemLocation: {
    color: Colors.gray,
  },
  itemId: {
    color: Colors.red,
  },
  itemSubmitedOnKey: {
    color: Colors.darkGray,
    fontFamily: Fonts.type.bold,
  },
  itemSubmitedOnKey1: {
    marginTop: 20,
  },
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    flex: 0.5,
    margin:10
  },
});
