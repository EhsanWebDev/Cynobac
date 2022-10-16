import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GlobalStyle, Images, Colors, Fonts} from '@common';

const XXLText = props => (
  <Text style={[styles.textStyle, props.textStyle]} {...props}>
    {props.children}
  </Text>
);

XXLText.propTypes = {
  bold: PropTypes.bool,
};
XXLText.defaultProps = {
  bold: false,
};
export default XXLText;
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.xxl,
    // tevxtAlign: 'center',
  },
});
