import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@common';

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
    marginHorizontal: 15
  },
  listItem:{
   marginTop:10
  },
  listImage:{
    width: '100%',
    height: 200
  },
  headerContainer: {
    // width: '100%',
    // backgroundColor:'red'
    // position :'absolute', 
    // bottom: 10
  },
  flatListMainContainer:{
    flex:1
  },
});
