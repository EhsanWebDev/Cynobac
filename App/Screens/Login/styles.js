import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {marginHorizontal: 20, marginTop: 20},
  inputContainer: {marginVertical: 36},
  heading: {
    color: Colors.red,
    marginTop: 30,
    fontFamily: Fonts.type.regular,
  },
  heading1: {
    color: Colors.darkGray,
    marginVertical: 20,
  },
  submit: {
    marginBottom: 20,
  },
  forgotPasswordTextContainer: {
    marginTop: 5,
  },
  forgotPasswordText: {
    color: Colors.red,
  },
  newUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newUser: {
    color: Colors.darkGray,
  },
  creatNewUser: {
    color: Colors.red,
    marginLeft: 1,
  },
});
