import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OtherActions from '../../Redux/Other/reducer';

const AboutProject = ({navigation}) => {
  const other = useSelector(state => state.other);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OtherActions.aboutUs({language: user.language}));
  }, [dispatch, user.language]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headingContainer}>
          <XLText
            textStyle={styles.headingText}>{`${Languages.aboutUS}`}</XLText>
        </View>
        {other.aboutUsData && other.aboutUsData.description && (
          <View style={styles.aboutUsContainer}>
            <MediumText textStyle={styles.aboutUsText}>
              {other.aboutUsData.description}
            </MediumText>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default AboutProject;
