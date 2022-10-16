import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GlobalStyle, Images, Colors, Fonts} from '@common';

const SmallText = (props) => (
  <Text
    style={[
      styles.textStyle,
      props.textStyle,
      {fontWeight: props.bold ? 'bold' : 'normal'},
    ]}
    {...props}>
    {props.children}
  </Text>
);

SmallText.propTypes = {
  bold: PropTypes.bool,
};
SmallText.defaultProps = {
  bold: false,
};
export default SmallText;
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    // textAlign: 'center',
  },
});
