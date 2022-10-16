import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {GlobalStyle, Images, Colors, Fonts} from '@common';

const LargeText = props => (
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

export default LargeText;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.large,
    // textAlign: 'center',
  },
});
