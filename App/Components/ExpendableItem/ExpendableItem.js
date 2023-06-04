import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomText} from '@Typography';
import {Icon} from 'react-native-elements';
import Colors from '../../Common/Colors';

const ExpendableItem = ({
  expended,
  onPress,
  questionCount = 1,
  description,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rowSB}>
          <CustomText title={`Question #${questionCount}`} bold />

          <Icon
            name={expended ? 'chevron-up' : 'chevron-down'}
            type="feather"
            color={Colors.primaryTextMuted}
          />
        </View>
      </TouchableOpacity>
      {expended && (
        <CustomText
          extraStyles={styles.desc}
          color={Colors.primaryTextMuted}
          title={description}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 32,
    borderBottomColor: Colors.greenMuted,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  rowSB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {paddingTop: 12},
});
export default ExpendableItem;
