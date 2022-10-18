import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  inputContainer: {marginVertical: 36},
  headingText: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
  },
  headingContainer: {
    marginTop: 28,
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
  submitNewReportContainer: {
    marginTop: 32,
    backgroundColor: Colors.lightGreen,
    borderRadius: 12,
    padding: 20,
  },
  seeAllContainer: {marginTop: 48, flex: 1},
  seeAllBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  reportItem: {marginTop: 16},
  reportItemLabel: {
    backgroundColor: Colors.lightParrot,
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  reportItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingBottom: 16,
    borderBottomColor: Colors.greenMuted,
    borderBottomWidth: 1,
  },
});
