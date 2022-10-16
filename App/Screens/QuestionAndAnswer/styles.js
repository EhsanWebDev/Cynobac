import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
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
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    // position :'absolute',
    // bottom:0,
    // margin: 30
    marginVertical: 15,
    marginHorizontal: 15,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  questionContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionContainer1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    margin: 10,
    padding: 10,
  },
  questionText: {},
  radioContainer: {
    width: '45%',
  },
  radioContainerStyle: {
    flexWrap: 'wrap',
    // justifyContent:'space-evenly',
    // width:350
  },
  listItemStyle: {width: '50%', marginTop: 10},
  listItemCheckBoxStyle: {
    marginLeft: -2,
  }
});
