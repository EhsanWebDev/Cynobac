import {Platform, StyleSheet} from 'react-native';
import {Colors, Fonts, GlobalStyles} from '@common';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

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
  slide1: {flex: 1},
  slide2: {flex: 1},
  slide3: {flex: 1},
  text: {},
  activeDotStyles: {
    height: 7,
    width: 24,
    backgroundColor: Colors.primaryText,
  },
  slideText: {
    alignItems: 'center',
    flex: 1,
    marginTop: 24,
    backgroundColor: 'white',
  },
  slideSubText: {
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 24,
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
    right: widthPercentageToDP('6%'),
    top:
      Platform.OS === 'android'
        ? heightPercentageToDP('6%')
        : heightPercentageToDP('10%'),
  },
  continueButton: {
    marginHorizontal: GlobalStyles.Constants.sizes.lg,
    marginBottom: 2,
  },
});
