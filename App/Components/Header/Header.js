import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomText} from '@Typography';
import {BackArrow} from '../../../assets/SVGs';

const index = ({title = 'Header title', onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <BackArrow />
      </TouchableOpacity>

      <CustomText extraStyles={styles.title} title={title} size={19} bold />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 36,
  },
});
export default index;
