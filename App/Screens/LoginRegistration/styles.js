import {Platform, StyleSheet} from 'react-native';
import {Colors, Fonts, GlobalStyles} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingHorizontal: 20,
  },
  heading: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.type.light,
  },
  headingContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.4,
  },
  buttonText: {
    color: Colors.red,
    // fontFamily: Fonts.type.bold,
  },
  buttonLogin: {
    backgroundColor: Colors.white,
  },
  buttonRegistration: {
    marginTop: 35,
    backgroundColor: Colors.lightRed,
  },
  footerContainer: {
    flex: 0.2,
  },
  footerTexxt: {
    color: Colors.white,
  },
  textContainerStyle: {
    marginTop: 25,
  },
  languageIcon: {
    marginTop: 35,
  },
  wrapper: {},
  slide1: {},
  slide2: {},
  slide3: {},
  text: {},
  activeDotStyles: {
    height: 7,
    width: 24,
    backgroundColor: Colors.primaryText,
  },
  slideText: {marginTop: 32, alignItems: 'center'},
  slideSubText: {
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 28,
    color: Colors.primaryTextMuted,
  },
  submit: {
    flex: 0.47,
  },
  slideButtonContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skipButton: {
    position: 'absolute',
    right: 30,
    top: Platform.OS === 'android' ? 60 : 100,
  },
  continueButton: {
    marginHorizontal: GlobalStyles.Constants.sizes.lg,
    marginBottom: 8,
  },
});
