import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioButtonListItem from './RadioButtonListItem';

const RadioButtonList = props => {
  return (
    <View style={styles.container}>
      {props.dataType !== 'array' ? (
        <View>
          {/* map a object */}
          {Object.keys(props.labels).map((label, index) => {
            return (
              <RadioButtonListItem
                key={index}
                index={index}
                // title={props.labels[label]} //get value
                title={label} //get key
                checked={
                  props.currentSelected &&
                  props.currentSelected.answer_text === label
                }
                onPress={props.onPress}
              />
            );
          })}
        </View>
      ) : (
        <View style={[styles.radioContainerStyle, props.radioContainerStyle]}>
          {/* this commented code is use for map a array */}
          {props.labels.map((label, index) => {
            return (
              <RadioButtonListItem
                key={index}
                index={index}
                title={label}
                checked={props.currentSelected === index}
                onPress={props.onPress}
                listItemStyle={props.listItemStyle}
                listItemCheckBoxStyle={props.listItemCheckBoxStyle}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

// RadioButtonList.propTypes = {
//   currentSelected: PropTypes.number,
//   labels: PropTypes.arrayOf(string).isRequired,
// };

// RadioButtonList.defaultProps = {
//   currentSelected: -1,
//   labels: [],
// };

export default RadioButtonList;

const styles = StyleSheet.create({
  container: {},
  radioContainerStyle: {
    flexDirection: 'row',
  },
});
