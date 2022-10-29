import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Languages, Images} from '@common';
import {XLText, MediumText, CustomText} from '@Typography';
import styles from './styles';
import OtherActions from '../../Redux/Other/reducer';
import Header from '../../Components/Header/Header';
const AboutProject = ({navigation}) => {
  const other = useSelector(state => state.other);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OtherActions.aboutUs({language: user.language}));
  }, [dispatch, user.language]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header onBackPress={navigation.goBack} title="About us" />
      </View>
      <ScrollView>
        {other.aboutUsData && other.aboutUsData.description && (
          <View style={styles.aboutUsContainer}>
            <CustomText
              title={`${other.aboutUsData.description}`}
              textStyle={styles.aboutUsText}>
              {other.aboutUsData.description}
            </CustomText>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default AboutProject;
