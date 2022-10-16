import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyle, Images, Colors, Fonts } from '@common';

const XLText = props => (
  <Text style={[styles.textStyle, props.textStyle]} {...props}>
    {props.children}
  </Text>
);

XLText.propTypes = {
  bold: PropTypes.bool,
};
XLText.defaultProps = {
  bold: false,
};
export default XLText;
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.xl,
    // textAlign: 'center',
  },
});
