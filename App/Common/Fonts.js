const type = {
  light: 'Sora-Light',
  extraLight: 'Sora-ExtraLight',
  regular: 'Sora-Regular',
  blackItalic: 'SourceSansPro-BlackIt',
  italic: 'SourceSansPro-It',
  extraLightItalic: 'SourceSansPro-ExtraLightIt',
  lightItalic: 'SourceSansPro-LightIt',
  boldItalic: 'SourceSansPro-BoldIt',
  black: 'SourceSansPro-Black',
  bold: 'Sora-Bold',
  semiBold: 'Sora-SemiBold',
  semiBoldItalil: 'SourceSansPro-SemiboldIt',
};
const size = {
  xxl: 50,
  xl: 30,
  large: 19,
  regular: 15,
  medium: 16,
  small: 13,
};
const style = {
  lightHeader: {
    fontFamily: type.light,
    fontSize: size.regular,
  },
};

export default {
  type,
  size,
  style,
};
