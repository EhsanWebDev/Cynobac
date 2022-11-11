import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {marginTop: 20, marginBottom: 26, marginHorizontal: 20},
  innerContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headingText: {
    color: Colors.red,
    fontFamily: Fonts.type.light,
  },
  headingContainer: {
    backgroundColor: Colors.inputBG,
    width: Dimensions.get('window').width / 3.8,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 12,
  },
  textStyle: {
    color: Colors.darkGray,
    marginVertical: 5,
  },
  submit: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  listItem: {
    marginTop: 10,
  },
  listImage: {
    // maxWidth: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3.8,
    height: 100,
    borderRadius: 12,
    marginVertical: 12,
  },
  headerContainer: {
    // width: '100%',
    // backgroundColor:'red'
    // position :'absolute',
    // bottom: 10
  },
  flatListMainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 20,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
