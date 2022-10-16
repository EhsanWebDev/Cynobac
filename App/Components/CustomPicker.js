import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Header, ListItem, Left, Button ,Body,Right} from "native-base";
import { Constants, Fonts, Images, GlobalStyles, Colors } from "@common";
import { LargeText, SmallText, RegularText } from "@Typography";
import { Icon } from "react-native-elements";
const CustomPicker = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { pickerText, pickerPlaceholder } = props;
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.textViewStyle}>
          <RegularText
            textStyle={[
              pickerText ? styles.pickerText : styles.pickerPlaceholder,
              props.textStyle,
            ]}
            numberOfLines={2}
          >
            {pickerText ? pickerText : pickerPlaceholder}
          </RegularText>
          <Icon
            name="chevron-down-outline"
            type={GlobalStyles.Constants.iconType.ionIcons}
            color={Colors.lightGray}
            size={25}
            containerStyle={[styles.arrow, props.arrowImageStyle]}
          />
          <View style={styles.bottomBorder}></View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              style={{ justifyContent: "flex-start" }}
              transparent
              onPress={() => setModalVisible(false)}
            >
              <Icon
                name="arrow-back-outline"
                type={GlobalStyles.Constants.iconType.ionIcons}
                color={Colors.black}
                size={30}
              />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <FlatList
          data={props.dataSource}
          renderItem={({ item, index }) => (
            <ListItem
              onPress={() => {
                props.onPress(item, index);
                setModalVisible(false);
              }}>
              <RegularText textStyle={{textAlign:'left'}}>{item.name}</RegularText>
            </ListItem>
          )}
          keyExtractor={(item) => item.id}
        />
      </Modal>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  mainView: {
    // paddingHorizontal: 20,
    paddingVertical:6
  },
  textViewStyle: {
    flexDirection: "row",
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    marginVertical: 10,
  },
  headerText: {
    position: "absolute",
    top: 5,
    fontSize: 18,
    color: "white",
  },
  backgroundContainer: {
    flex: 1,
  },
  image: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    position: "absolute",
    width: 20,
    height: 20,
    right: 10,
    justifyContent:'center',
    bottom:10
  },
  pickerText: {
    textAlign: "left",
  },
  pickerPlaceholder: {
    textAlign: "left",
    color: Colors.lightGray,
  },
  backArrow: {
    width: 20,
    height: 20,
    tintColor: "black",
  },
  bottomBorder: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
