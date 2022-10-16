import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, FlatList, StyleSheet, Text } from "react-native";
import { List, Body } from "native-base";
import { Colors, GlobalStyles } from "@common";
import TextField from "./TextField";
import {  RegularText } from "@Typography";
class DropdownCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      valueId: null,
      name: "",
      value: "",
      // dropdownNewData: "",
    };
  }

  _handleSelection = (item) => {
    this.props.onSelection(item);
    this.setState({
      value: item.text,
      dropdownNewData: "",
    });
  };
  // onChangeText = (value) =>{
  //   this.setState({ value: value });
  //   if (value) {
  //     const newData = dropdownAllItem.filter((item) => {
  //       return item.text.toLocaleLowerCase().match(value.toLocaleLowerCase());
  //     });
  //     this.setState({
  //       dropdownNewData:newData
  //     })
  //   } else {
  //     this.setState({
  //       dropdownNewData:""
  //     })
  //   }
  // }

  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item }) => {
    var value = this.state;
    return (
      <TouchableOpacity
        onPress={() => this._handleSelection(item)}
        style={styles.listItemStyle}
      >
        <RegularText
          bold={value === item.text}
          textStyle={
            value === item.text
              ? styles.itemTextSelectedStyle
              : styles.itemTextStyle
          }
        >
          {item.name}
        </RegularText>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      containerStyle,
      placeHolder,
      onChangeText,
      dropDownValue,
      dropdownNewData,
      value
    } = this.props;
    return (
      <List style={[styles.container, containerStyle]}>
        <Body>
          <TextField
            placeHolder={placeHolder}
            onChangeText={(text)=>
              onChangeText(text)
            }
            value={value}
          />
        </Body>
        {dropdownNewData.length > 0 && (
          <FlatList
            nestedScrollEnabled
            showsVerticalScrollIndicator
            keyboardShouldPersistTaps={true}
            style={[styles.flatListStyle]}
            data={dropdownNewData}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            extraData={dropdownNewData}
          />
        )}
      </List>
    );
  }
}

DropdownCell.propTypes = {
  dropdownItem: PropTypes.object,
  title: PropTypes.string,
};

DropdownCell.defaultProps = {};

export default DropdownCell;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    width: "100%",
  },
  itemTextStyle: {
    color: Colors.mediumGray,
    textAlign: "left",
  },
  itemTextSelectedStyle: {
    color: Colors.blue,
    textAlign: "left",
  },
  listItemStyle: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRightWidth: 0.5,
    borderRightColor: Colors.mediumGray,
    borderLeftWidth: 0.5,
    borderLeftColor: Colors.mediumGray,
  },
  flatListStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.mediumGray,
  },
  placeholder: {
    marginVertical: 10,
    color: Colors.lightGray,
    marginHorizontal: 3,
  },
});
