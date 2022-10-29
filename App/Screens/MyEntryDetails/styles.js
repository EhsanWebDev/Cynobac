import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerViewContainer: {
    marginVertical: 16,
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
    marginHorizontal: 10,
    marginVertical: 20,
  },
  buttonStyle: {
    flex: 0.5,
    margin: 10,
  },
  locationContainer: {marginTop: 20, marginBottom: 24},
  detailsContainer: {marginHorizontal: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
  },
  headerText: {textAlign: 'center', flex: 1, marginLeft: 36},
  headerButton: {
    borderColor: Colors.inputBG,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
