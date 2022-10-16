import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '@common';

const Loading = (props) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.white} />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
