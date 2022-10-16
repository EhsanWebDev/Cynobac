import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {marginHorizontal: 20, marginTop: 20},
  inputContainer: {marginTop: 40, marginBottom: 10},
  heading: {
    color: Colors.red,
    marginTop: 30,
    marginBottom: 20,
    fontFamily: Fonts.type.light,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    marginVertical: 20,
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
