import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {GlobalStyles, Colors, Images} from '@common';
import {Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Languages} from '@common';

// arrowBackWhite
const HeaderLeft = props => {
  const user = useSelector(state => state.user);
  return (
    <View style={styles.headerLeftView}>
      {props.backButton && (
        <TouchableOpacity
          onPress={() =>
            props.backNavigationName
              ? props.navigation.navigate(props.backNavigationName)
              : props.navigation.goBack()
          }>
          <Image style={styles.imageStyle} source={Images.arrowBackWhite} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default HeaderLeft;

const styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 20,
  },
  imageStyle: {
    width: 28,
    height: 20,
  },
});
