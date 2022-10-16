import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XXLText, TextWithImage, XLText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MenuIcon} from '../../../assets/SVGs';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);

  const onPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation?.openDrawer()}>
            <MenuIcon color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPress('Profile')}
            style={styles.headingContainer}>
            <XLText
              textStyle={
                styles.headingText
              }>{`${Languages.welcome} ${user.name}`}</XLText>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TextWithImage
              onPress={() => onPress('SubmitReport')}
              containerStyle={styles.textContainerStyle}
              imageStyle={styles.textImageStyle}
              textStyle={styles.textStyle}
              source={Images.forwardArrowWhite}>
              {Languages.submitAReport}
            </TextWithImage>
            <TextWithImage
              onPress={() => onPress('MyEntry')}
              containerStyle={styles.textContainerStyle}
              imageStyle={styles.textImageStyle}
              textStyle={styles.textStyle}
              source={Images.forwardArrowWhite}>
              {Languages.myEntry}
            </TextWithImage>
            <TextWithImage
              onPress={() => onPress('AboutProject')}
              containerStyle={styles.textContainerStyle}
              imageStyle={styles.textImageStyle}
              textStyle={styles.textStyle}
              source={Images.forwardArrowWhite}>
              {Languages.aboutProject}
            </TextWithImage>

            <TextWithImage
              onPress={() => onPress('Settings')}
              containerStyle={styles.textContainerStyle}
              imageStyle={styles.textImageStyle}
              textStyle={styles.textStyle}
              source={Images.forwardArrowWhite}>
              {Languages.settings}
            </TextWithImage>
          </View>
          <View style={styles.footerContainer}>
            <TextWithImage
              source={Images.forwardArrowWhite}
              onPress={() => onPress('ContactUs')}>
              {Languages.contactUs}
            </TextWithImage>
            <TextWithImage
              containerStyle={styles.textContainerStyle1}
              source={Images.forwardArrowWhite}>
              {Languages.faq}
            </TextWithImage>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
