import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabBarMainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabBarContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
  },
  plusContainer: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    backgroundColor: Colors.green,
    width: 55,
    height: 55,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImageStyle: {
    width: 24,
    height: 24,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    // paddingBottom: 10
  },
  listItemContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 15,
    height: 12,
  },
  itemLocation: {
    color: Colors.gray,
  },
  itemId: {
    color: Colors.red,
  },
  listContentContainerStyle: {
    paddingBottom: 90,
    flexGrow: 1,
  },
});
