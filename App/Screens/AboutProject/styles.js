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
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.mediumGray,
    padding: 20,
  },
  aboutUsContainer: {
    marginHorizontal: 20,
  },
  aboutUsText: {
    color: Colors.gray,
  },
});
