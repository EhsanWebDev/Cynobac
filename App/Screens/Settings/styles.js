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
    marginHorizontal: 20,
    marginBottom: 12,
  },
  radioContainerStyle: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  listItemStyle: {
    borderRadius: 12,
    marginBottom: 8,
    paddingVertical: 12,
  },
});
