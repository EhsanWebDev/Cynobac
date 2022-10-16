import React from 'react';
import {Text} from 'react-native';
import {Colors, Fonts} from '@common';

const CustomText = ({
  title = '',
  size = Fonts.size.regular,
  bold = false,
  fontFamily = Fonts.type.regular,
  color = Colors.primaryText,
  extraStyles = {},
  ...rest
}) => {
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontFamily: bold ? Fonts.type.semiBold : Fonts.type.regular,
          color,
        },
        extraStyles,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};

export default CustomText;
