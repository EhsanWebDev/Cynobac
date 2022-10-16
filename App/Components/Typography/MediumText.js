import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';

const MediumText = props => (
  <Text style={[styles.textStyle, props.textStyle]} {...props}>
    {props.children}
  </Text>
);

MediumText.propTypes = {
  bold: PropTypes.bool,
};
MediumText.defaultProps = {
  bold: false,
};

export default MediumText;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    // textAlign: 'center',
  },
});
