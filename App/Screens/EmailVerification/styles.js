import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {marginHorizontal: 20, marginTop: 20},
  inputContainer: {flex: 1, marginVertical: 40},
  heading: {
    color: Colors.red,
    marginTop: 30,
    marginBottom: 20,
    fontFamily: Fonts.type.light,
  },
  sentEmailText: {alignItems: 'center', marginTop: 32},
  maskInput: {
    backgroundColor: Colors.inputBG,
    borderRadius: 12,
    height: 50,
    width: 50,
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.bold,
    borderColor: 'transparent',
    color: Colors.primaryText,
    borderWidth: 0,
    margin: 0,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    marginVertical: 30,
  },
  dontReciveContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontRecive: {
    color: Colors.darkGray,
  },
  resend: {
    color: Colors.red,
    marginLeft: 1,
  },
});
