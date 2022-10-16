import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LargeText } from "@Typography";

const EmptyList = (props) => {
  return (
    <View style={styles.mainView}>
      <LargeText>{props.emptyTitle}</LargeText>
    </View>
  );
};
export default EmptyList;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
