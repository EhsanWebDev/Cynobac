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

const ContactUs = ({navigation}) => {
  const user = useSelector(state => state.user);

  const {contactUsData} = useSelector(state => state.other);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OtherActions.contactUs({language: user.language}));
  }, [dispatch, user.language]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {contactUsData?.mobile_no && (
          <View style={styles.headingContainer}>
            <XLText
              textStyle={
                styles.headingText
              }>{`${Languages.phone} ${contactUsData.mobile_no}`}</XLText>
          </View>
        )}
        {contactUsData?.description && (
          <View style={styles.aboutUsContainer}>
            <MediumText textStyle={styles.aboutUsText}>
              {contactUsData.description}
            </MediumText>
          </View>
        )}
        <View style={[styles.headingContainer, {borderBottomWidth: 0}]}>
          <XLText textStyle={styles.headingText}>{`${Languages.faq}`}</XLText>
        </View>
        <View style={styles.aboutUsContainer}>
          <MediumText textStyle={styles.aboutUsText}>
            {'Key questions and answers about Cynobac'}
          </MediumText>
          <MediumText textStyle={styles.aboutUsText}>
            {'About the FAQs'}
          </MediumText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ContactUs;
