import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '@common';
import PropTypes from 'prop-types';

const TextWithImage = props => (
  <TouchableOpacity   onPress={props.onPress}
    disabled={props.touchDisabled ? props.touchDisabled : false}
    style={[
      styles.containerStyle,
      props.containerStyle,
      // {fontWeight: props.bold ? 'bold' : 'normal'},
    ]}>
    {props.source && (
      <Image
        style={[styles.imageStyle, props.imageStyle]}
        source={props.source}
      />
    )}
    <Text
      style={[
        styles.textStyle,
        props.textStyle,
        // {fontWeight: props.bold ? 'bold' : 'normal'},
      ]}
      {...props}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

TextWithImage.propTypes = {
  bold: PropTypes.bool,
};
TextWithImage.defaultProps = {
  bold: false,
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  textStyle: {
    fontFamily: Fonts.type.regular,
    // textAlign: 'center',
    fontSize: Fonts.size.medium,
    color: Colors.white,
    marginLeft: 10,
  },
  imageStyle: {
    width: 15,
    height: 12,
  },
});
export default TextWithImage;
