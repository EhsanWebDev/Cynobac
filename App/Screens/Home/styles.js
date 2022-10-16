import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    // paddingHorizontal: 20,
  },
  headingText: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
  },
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  textContainerStyle: {
    marginTop: 50,
  },
  textStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xl,
  },
  footerContainer: {
    paddingHorizontal: 20,
    marginTop: 50,
    // flex: 0.2,
  },
  footerText: {
    color: Colors.white,
  },
  textContainerStyle1: {
    marginTop: 20,
  },
});
