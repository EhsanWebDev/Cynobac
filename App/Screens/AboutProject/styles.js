import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  headingText: {
    color: Colors.red,
    fontFamily: Fonts.type.light,
  },
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.mediumGray,
    padding: 20,
  },
  aboutUsContainer:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    marginTop: 10,
    padding: 10,
    margin: 10
  },
  aboutUsText:{
    color: Colors.gray,
  },
});
