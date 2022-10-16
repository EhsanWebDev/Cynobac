import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '@common';
import PropTypes from 'prop-types';

const RegularText = props => (
  <Text
    style={[
      styles.textStyle,
      props.textStyle,
      // {fontWeight: props.bold ? 'bold' : 'normal'},
    ]}
    {...props}>
    {props.children}
  </Text>
);

RegularText.propTypes = {
  bold: PropTypes.bool,
};
RegularText.defaultProps = {
  bold: false,
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: Fonts.type.regular,
    // textAlign: 'center',
    fontSize: Fonts.size.regular,
    color: Colors.black,
  },
});
export default RegularText;
