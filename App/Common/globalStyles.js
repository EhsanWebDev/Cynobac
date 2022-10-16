import Color from './Colors';
import Fonts from './Fonts';
import Constant from './Constants';

const Constants = {
  headerIconSize: Constant.smallDevice ? 25 : 30,
  IconSize: Constant.smallDevice ? 20 : 25,
  borderRadius: 12,
  smallIconSize: 20,
  iconType: {
    material: 'material',
    materialCom: 'material-community',
    ionIcons: 'ionicon',
  },
  sizes: {
    lg: 20,
    md: 10,
    sm: 5,
  },
};

const style = {
  flex1: {
    flex: 1,
  },
  flatListStyle: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: Color.offWhite,
  },
  grayContainer: {
    backgroundColor: Color.grayBG,
  },
  icon: {
    marginHorizontal: 10,
  },

  content: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  blueText: {
    color: Color.blue100,
  },
  headerStyle: {
    backgroundColor: Color.blue200,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    width: '100%',
  },
  headerTextBtn: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
  },
  iconRight: {
    marginRight: 15,
  },
  iconLeft: {
    marginLeft: 15,
  },
};

export default {
  style,
  Constants,
};
