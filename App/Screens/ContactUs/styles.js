import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {marginTop: 20, marginBottom: 26, marginHorizontal: 20},
  headingText: {
    color: Colors.red,
    fontFamily: Fonts.type.light,
  },
  descContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.marble,
    padding: 20,
  },
  iconContainer: {
    backgroundColor: Colors.green,
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 12,
  },
  mtop: {marginTop: 32},
  headingContainer: {},
  aboutUsContainer: {},
  aboutUsText: {
    color: Colors.gray,
  },
});
