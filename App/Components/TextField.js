import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Box, Input} from 'native-base';
import {Icon} from 'react-native-elements';
import {GlobalStyles, Fonts, Colors} from '@common';
import {CustomText} from '@Typography';
import globalStyles from '../Common/globalStyles';

class TextField extends Component {
  render() {
    const {
      placeHolder,
      rightIcon,
      inputAccessoryViewID,
      onChangeText,
      autoCorrect,
      autoCapitalize,
      showRightButton,
      onPressRightIcon,
      value,
      innerPlaceHolder,
      keyboardType,
      multiline,
      textInputStyle,
      containerStyle,
      editable,
      error,
      secureTextEntry,
      ref,
      onSubmitEditing,
      headingText,
    } = this.props;
    return (
      <>
        <View>
          {headingText && (
            <CustomText
              title={headingText}
              size={Fonts.size.regular}
              bold
              extraStyles={styles.textStyle}
            />
          )}
          <View style={[styles.inputContainer, textInputStyle]}>
            <Input
              ref={ref}
              placeholder={placeHolder}
              editable={editable}
              placeholderTextColor={Colors.primaryTextMuted}
              value={value}
              style={[styles.textInput, textInputStyle]}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              onChangeText={onChangeText}
              multiline={multiline}
              secureTextEntry={secureTextEntry}
              onSubmitEditing={onSubmitEditing}
              _focus={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
              }}
              borderColor={Colors.transparent}
              {...this.props}
            />
            {showRightButton && (
              <TouchableOpacity onPress={onPressRightIcon}>
                <Icon
                  color={Colors.primaryTextMuted}
                  name={rightIcon}
                  type={GlobalStyles.Constants.iconType.materialCom}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.errorStyle}>{error}</Text>
      </>
    );
  }
}

TextField.propTypes = {
  placeHolder: PropTypes.string,
  image: PropTypes.number,
  onChangeText: PropTypes.func,
  onPressRightIcon: PropTypes.func,
  showRightButton: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};
TextField.defaultProps = {
  placeHolder: null,
  image: null,
  showRightButton: false,
  secureTextEntry: false,
};
export default TextField;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.inputBG,
    borderRadius: globalStyles.Constants.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    overflow: 'hidden',
  },
  textInput: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.regular,
    paddingLeft: 16,
    height: 52,
    flex: 0.93,
  },
  errorStyle: {
    paddingTop: 3,
    color: 'red',
    fontSize: 13,
  },
  textStyle: {
    marginVertical: 5,
  },
});
