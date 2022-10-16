import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Share} from 'react-native';
import {GlobalStyles, Colors} from '@common';
import {Icon} from 'react-native-elements';
import OtherActions from '../Redux/Other/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {MediumText, RegularText, SmallText} from '@Typography';
import UserActions from '../Redux/User/reducer';

const HeaderRight = props => {
  var dispatch = useDispatch();
  const onLogout = async () => {
    dispatch(UserActions.resetUser());
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.headerRightView}>
      {props.showHeaderRight && (
        <Icon
          name="logout"
          type={GlobalStyles.Constants.iconType.materialCom}
          color={Colors.white}
          size={25}
          onPress={onLogout}
        />
      )}
      {/*  {notificationCount != 0 && (
        <View style={styles.badgetView}>
          <SmallText textStyle={styles.badgetText}>
            {notificationCount}
          </SmallText>
        </View>
      )}

      <Icon
        name="share-variant"
        type={GlobalStyles.Constants.iconType.materialCom}
        color={Colors.white}
        size={25}
        containerStyle={styles.share}
        onPress={onShare}
      /> */}
    </View>
  );
};
export default HeaderRight;

const styles = StyleSheet.create({
  headerRightView: {
    flexDirection: 'row',
    marginRight: 10
  },
});
