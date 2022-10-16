import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Colors} from '@common';
import {CheckBox} from 'react-native-elements';
import {RegularText, MediumText, CustomText} from '@Typography';

const RadioButtonListItem = ({
  checked,
  index,
  listItemStyle,
  listItemCheckBoxStyle,
  key,
  title,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        listItemStyle,
        checked && styles.checkedStyles,
      ]}>
      <CheckBox
        containerStyle={[styles.checkBoxContainer, listItemCheckBoxStyle]}
        iconType="material"
        checkedIcon={'check-circle-outline'}
        uncheckedIcon="radio-button-unchecked"
        checkedColor={Colors.green}
        checked={checked}
        onPress={() => onPress(index)}
        key={key}
      />
      <CustomText
        title={title}
        color={Colors.primaryText}
        extraStyles={styles.checkBoxText}
      />
    </View>
  );
};

RadioButtonListItem.propTypes = {
  checked: PropTypes.bool,
  index: PropTypes.number,
  title: PropTypes.string,
};

RadioButtonListItem.defaultProps = {
  checked: false,
  index: 0,
  title: 'No title',
};

export default RadioButtonListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.inputBG,
    borderRadius: 12,
  },
  checkedStyles: {borderColor: Colors.green, borderWidth: 1},
  checkBoxText: {
    marginLeft: -4,
  },
  checkBoxContainer: {
    padding: 0,
    margin: 0,
  },
  leftIcon: {
    marginRight: 0,
    marginVertical: 0,
  },
});
