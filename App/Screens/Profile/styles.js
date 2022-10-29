import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {marginHorizontal: 20, marginTop: 20},
  inputContainer: {marginVertical: 32},
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
  },
  haveAn: {
    color: Colors.darkGray,
  },
  bottomContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    marginVertical: 40,
    padding: 10,
    justifyContent: 'space-between',
  },
  botttomViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bottomImage: {
    width: 25,
    height: 15,
  },
  bottomText: {
    fontFamily: Fonts.type.semiBold,
  },
  avatarContainer: {alignItems: 'center', marginTop: 32},
  avatar: {width: 100, height: 100, borderRadius: 50},
  camIcon: {
    backgroundColor: Colors.green,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 115,
    borderWidth: 2,
    borderColor: 'white',
  },
});
