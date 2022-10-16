import React, {useRef, useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Languages, Images} from '@common';
import {SolidButton} from '@Buttons';
import {TextWithImage, CustomText} from '@Typography';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {
  OnboardingFirstImg,
  OnboardingSecondImg,
  OnboardingThirdImg,
} from '../../../assets/SVGs';

const LoginRegistration = ({navigation}) => {
  const swiperRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);

  const onPressButton = nav => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        onIndexChanged={index => setSlideIndex(index)}
        loop={false}
        style={styles.wrapper}
        activeDotStyle={styles.activeDotStyles}>
        <View style={styles.slide1}>
          <OnboardingFirstImg />
          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide1Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide1SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
        <View style={styles.slide2}>
          <OnboardingSecondImg />

          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide2Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide2SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
        <View style={styles.slide3}>
          <OnboardingThirdImg />
          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide3Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide3SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
      </Swiper>
      <TextWithImage
        source={Images.forwardArrowWhite}
        onPress={() => onPressButton('ContactUs')}>
        {Languages.contactUs}
      </TextWithImage>
      {slideIndex === 2 ? (
        <View style={styles.slideButtonContainer}>
          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.signup}
            onPress={() => onPressButton('Registration')}
          />
          <SolidButton
            buttonStyle={[styles.submit]}
            outlined
            title={Languages.signin}
            onPress={() => onPressButton('Login')}
          />
        </View>
      ) : (
        <View style={styles.continueButton}>
          <SolidButton
            title={Languages.continue}
            onPress={() => swiperRef?.current?.scrollTo(slideIndex + 1)}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => onPressButton('Login')}>
        <CustomText title="Skip" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default LoginRegistration;
