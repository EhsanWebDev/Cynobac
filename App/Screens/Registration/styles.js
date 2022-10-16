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
  heading1: {
    color: Colors.darkGray,
    marginVertical: 20,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  radioContainer: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listItemCheckBoxStyle: {
    marginLeft: 0,
  },
  submit: {
    marginVertical: 20,
  },
  haveAnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  haveAn: {
    color: Colors.darkGray,
  },
  loginHere: {
    color: Colors.red,
    marginLeft: 1,
  },
});
