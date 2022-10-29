import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '@common';
import {CustomText} from '@Typography';
import {Button} from 'native-base';

const SolidButton = ({
  buttonStyle,
  disabled,
  onPress,
  image,
  title,
  textStyle,
  outlined,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      block
      rounded
      style={[
        styles.buttonStyle,
        buttonStyle,
        disabled && styles.disabled,
        outlined && styles.outlined,
      ]}
      onPress={onPress}>
      {image && <Image source={image} style={styles.logo} />}
      <CustomText
        title={title}
        size={Fonts.size.regular}
        bold
        extraStyles={[
          styles.textStyle,
          textStyle,
          outlined && styles.textOutlined,
        ]}
      />
    </TouchableOpacity>
  );
};

SolidButton.propTypes = {
  title: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};
SolidButton.defaultProps = {
  title: 'Button',
  showIcon: false,
};

export default SolidButton;

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 5,
    backgroundColor: Colors.primaryBG,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2.65,
    elevation: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlined: {
    backgroundColor: Colors.white,
    borderColor: Colors.primaryBG,
    borderWidth: 1,
  },
  textOutlined: {
    color: Colors.primaryBG,
  },
  logo: {width: 20, height: 20, marginLeft: 0, marginRight: 10},
  textStyle: {
    color: Colors.white,
  },
  disabled: {backgroundColor: Colors.lightGray},
});
